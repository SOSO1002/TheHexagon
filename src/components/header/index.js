import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Web3 from 'web3'
import { CHAINID } from '../../constants/'

import { initWallet } from '../../utils/web3/Wallet'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const CatalogStyle = styled.div`{
  .dropdown-menu {
    background:linear-gradient(180deg, #424242 0%, #323232 100%);
  }
  .btn-success {
    background:transparent !important;
    border:none !important;
  }
  @media(min-width:1350px) {
    .hamburger-react {
      display:none;
    }
  }
  @media (max-width:1350px) {
      .hamburger-react {
        position: fixed !important;
        right: 0;
        top: 0;
        margin-right:16px;
        margin-top:16px;
        // background:green;
        z-index:10;
        opacity:0.7;
        border-radius:20px;
      }
      .btn-success {
        color:yellow !important;
        font-size:25px;
      }
    }
}`;

const Navigation = ({ wallet, setWallet, connect, home, staking, billboard }) => {
  return <div className="hamburger-menu" >
    <ul className="menu-box" id="menu_box">
      <li>
        <Link to='/' style={home}>Home</Link>
      </li>
      <li><Link to='staking' style={staking}>NFT Staking</Link><p>soon</p></li>
      <li><a href='#'>Marketplace</a><p>soon</p></li>
      <li><a href='#'>Farm</a><p>soon</p></li>
      <li><a href='#' style={billboard} >HoneyComb</a><img src='/images/open_in_new.png' /><p>soon</p></li>
      <li><a href='#'>Game</a><img src='/images/open_in_new.png' /><p>soon</p></li>
      <li><a href='https://whitepaper.thehexagonbee.com/' target='_blank'>Whitepaper<img src='/images/open_in_new.png' /></a></li>
      <li><a href='#footer' >Community</a></li>
      {/* <div className="menu-social">
        <a href='https://discord.gg/KKcsW7d7J4' target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
        <a href='https://twitter.com/TheHexagonOrg/' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
      </div> */}
      {/* <li>
        <button className='metamask' onClick={() => connect()}>{!!wallet ? wallet.substr(0, 6) + '...' + wallet.substr(wallet.length - 4, 4) : 'Connect Wallet'}</button>
      </li> */}
      <li>
        <div className='burger-connect-wallet'>
          {/* <li className='wallet-li'><a><button className='burger-user-info'>
            <FontAwesomeIcon icon={faUser} /></button></a></li> */}
          <li><button onClick={() => connect()} className="metamask">{!!wallet ? wallet.substr(0, 6) + '...' + wallet.substr(wallet.length - 4, 4) : 'Connect'}</button></li>
        </div>
      </li>
    </ul>
  </div >
}

const Header = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [wallet, setWallet] = useState('')
  const [number, setNumber] = useState(1)
  const [web3, setWeb3] = useState(null)
  const [remain, setRemain] = useState('2,000')
  const [price, setPrice] = useState('')
  useEffect(() => {

  }, [])
  const changeNet = async () => {
    const web3a = new Web3(Web3.givenProvider);
    setWeb3(web3a)
    try {
      await web3a.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CHAINID }]
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  const connect = async () => {
    console.log("connect connect")
    await initWallet(setWallet)
    await changeNet()
  }

  return (
    <CatalogStyle className='header'>
      <div className="header-section">
        <div className="header-container">
          <div className="header-control">
            <div className='image-group'>
              <a href='/' >
                <img src='/images/logo.png' className='logo' />
                <img src='/images/logotext.png' className='logotext' /></a>
            </div>
            <div className="header-menu">
              <ul>
                <li>
                  <a href='/' style={props.home}>Home</a>
                </li>
                <li><p>soon</p><a href='#' style={props.staking} >NFT Staking</a></li>
                <li><p>soon</p><a href='#'>Marketplace</a></li>
                <li><p>soon</p><a href='#'>Farm</a></li>
                <li><p>soon</p><a href='#' style={props.billboard}>HoneyComb<img src='/images/open_in_new.png' /></a></li>
                <li><p>soon</p><a href='#'>Game<img src='/images/open_in_new.png' /></a></li>
                <li><a href='https://whitepaper.thehexagonbee.com/' target='_blank'>Whitepaper<img src='/images/open_in_new.png' /></a></li>
                <li><a href='#footer'>Community</a></li>
              </ul>
              {/* <div className="header-social">
                <a href='https://discord.gg/KKcsW7d7J4' target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                <a href='https://twitter.com/TheHexagonOrg/' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
              </div> */}
              {/* <a><button className='metamask'><span>Connect</span></button></a> */}
              <div className='connect-wallet'>
                {/* <li><a><button className='user-info'>
                  <FontAwesomeIcon icon={faUser} /></button></a></li> */}
                <li><button onClick={() => connect()} className="metamask">{!!wallet ? wallet.substr(0, 6) + '...' + wallet.substr(wallet.length - 4, 4) : 'Connect'}</button></li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Navigation wallet={wallet} setWallet={setWallet} connect={connect} />}
      <Hamburger toggled={isOpen} toggle={setOpen} color='#fff' />
    </CatalogStyle>
  );
}
export default Header;
