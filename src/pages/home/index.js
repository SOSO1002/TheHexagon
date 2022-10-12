import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Typography } from '@mui/material';
import BigNumber from 'bignumber.js'

import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { errorAlert, warningAlert } from '../../components/toastGroup';
// import { ethers } from "ethers";

import { contractHoney, contractNFT } from '../../constants/contractConfig';
import abiNFT from '../../constants/abiNFT.json'
import {addrNFT} from '../../constants/contractConfig'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Banner from './banner'
import About from './about'
import Story from './story'
import Roadmap from './roadmap'
import Tokens from './tokens'
import Faq from './faq'
import Scrolltotop from '../../components/scrolltotop'
import './home.css';

const MintAlert = withReactContent(Swal);

const errors = [
 /*0*/ "The wrong network, please switch to the Avalanche network.",
 /*1*/  "First, you should connect it with your wallet.",
 /*2*/  "Mint limit exceed!",
 /*3*/  "SALE has not Started!",
 /*4*/  "Amount Exceed!",
 /*5*/  "Amount Exceed! No more than 1700 NFTs are provided during the pre-sale stage.",
 /*6*/  "You are not a WhiteListed Person! In the pre-sale stage, only owners in the WhiteListed can get.",
 /*7*/  "In PRESALE Stage, you can buy ONLY 2 Cronos!",
 /*8*/  "Your balance is not enough.",
 /*9*/  "You can buy a maximum of 8 Cronos.",
/*10*/  "Oops. We find the unknown error. Please try again.",
/*11*/  "Oops. Insufficient funds.",
]

const pricesChunk = [
  {number: 999, price: 0.6},
  {number: 1999, price: 0.8},
  {number: 2999, price: 1},
  {number: 3999, price: 1.2},
  {number: 6999, price: 1.5},
  {number: 10000, price: 2}
]


const Home = () => {
  const [input, setInput] = useState(1);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMinted, setTotalMinted] = useState(0)
  const [currentBalance, setCurrentBalance] = useState(0);
  const [availableNum, setAvaiableNum] = useState(10000);
  const [isOnPresale, setIsOnPresale] = useState(false);
  const [isOnPublicSale, setIsOnPublicSale] = useState(false);
  const dispatch = useDispatch();
  const [userAddress, setUserAddress] = useState(localStorage.getItem('wallet'))

  const [isOpen, setIsOpen] = useState(false);
  const [showAddress, setShowAddress] = useState("Connect Wallet");
  const toggle = () => setIsOpen(!isOpen);

  const CHAIN_ID = 43114; //This is mainnet ChainID. Provide 43113 if U wan2 test;
  
  useEffect(()=>{
    // connectWallet();
    // isMetamaskConnected();
    (async () => {
      // await calculateRoot();
      await getAvailableNum()
      await getTotalMinted()

      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0xa86a',
          chainName: "Avalanche Mainnet C-Chain",
          nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18
          },
          rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
          blockExplorerUrls: ['https://snowtrace.io/']
        }]
      })
    })()
  }, []);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  const getTotalMinted = async () => {
    let minted = await contractNFT.methods.minted().call()
    console.log('totalMinted', minted)
    setTotalMinted(minted)
  }

  // useInterval(() => getTotalMinted(), 5000)

  const getAvailableNum = async ()=>{
        setAvaiableNum(10000);
  }

  const getTotalPrice = mintAmount => {
    let totalPrice = 0;
    for(let i=1; i<=mintAmount; i++) {
      let priceList = pricesChunk.filter(priceItem => totalMinted + i <= priceItem.number)
      let onlyPriceList = []
      priceList.map(item => {
        onlyPriceList.push(item.price)
      }) 
      totalPrice += Math.min(...onlyPriceList)
    }
    console.log('total price', totalPrice)
    return totalPrice
  }
  
    
  const connectWallet = async () => {
     const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            // 43113: 'https://testnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
		        43314: 'https://api.avax.network/ext/bc/C/rpc'
          },
          chainId: 43114 // Look at linenumber 77.
        }
      }
    };
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional provide "testnet" if U wan2 test
      cacheProvider: true, // optional
      providerOptions // required
    });

    const provider = await web3Modal.connect();
    dispatch({ type: "set", provider: provider });
    const web3 = new Web3(provider);
    dispatch({ type: "set", web3: web3 });
    await web3Modal.toggleModal();

    const newWeb3 = new Web3(provider);
    const accounts = await newWeb3.eth.getAccounts();
    dispatch({ type: "set", userAddress: accounts[0] });
    setShowAddress(accounts[0].substr(0, 4) + "..." + accounts[0].substr(accounts[0].length - 3, accounts[0].length));
    setIsOpen(true)
    const chainId = await web3.eth.getChainId();
    if (chainId != CHAIN_ID) {
      toast.info("Connected to avalanche network");
    }
    console.log('accounts', accounts[0])
  }

  const getSignerBalance = async (address) => {
    const web3 = new Web3(Web3.givenProvider);
    const balance = await web3.eth.getBalance(address);
    setCurrentBalance(balance);
    return balance;
  }

  const _mint = async () => {
    if (userAddress === '') {
      errorAlert(errors[1]);
      return
    }

    const web3 = new Web3(Web3.givenProvider);
    const contractNFT = new web3.eth.Contract(abiNFT, addrNFT);
    const price = getTotalPrice(count)
    

    toast.dismiss();
    setIsLoading(true);

    const balance = await getSignerBalance(userAddress)

    try {

      if (BigNumber(price).multipliedBy(BigNumber('1000000000000000000')).isGreaterThan(BigNumber(balance))) {
        errorAlert(errors[11]);
        setIsLoading(false);
        return;
      }
      await contractNFT.methods.mint([], count).send({
        from: userAddress,
        value: BigNumber(price).multipliedBy(BigNumber('1000000000000000000')).toString()
      });
      MintAlert.fire({
        title: 'Congratulation!',
        html: 'Minting Sucess',
        icon: 'success'
      })

      await getAvailableNum()
      await getTotalMinted()

    } catch (err) {
      setIsLoading(false);
      if (err < 10) {
        errorAlert(errors[err]);
      } else if (err === 11) {
      } else {
        errorAlert(errors[10]);
        console.log(err);
      }
    }
    setIsLoading(false);
  }
  
  return (
    <div className="Home-container">
      <Header home={{ color: '#e4ae46' }} address={userAddress}/>
      <Banner 
        mint=
        {
          () => {
              _mint(8)
          }
        }
        isLoading={isLoading} 
        count={count} 
        setCount={setCount}
        totalMinted={totalMinted}
        availableNum={availableNum}
      />
      <About />
      <Story />
      <Roadmap />
      <Tokens />
      <Faq />
      <Footer />
      <Scrolltotop />
      <ToastContainer style={{ fontSize: 12, padding: "5px !important", lineHeight: "15px" }} />
    </div>
  );
}
export default Home;
