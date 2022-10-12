import { clearWalletProvider, connectToWallet, web3ModalProvider } from "./Web3Modal";

import { TheHexagonContractAddress } from "../../constants/"
import TheHexagonABI from '../../constants/abis/TheHexagon.json'

export let accountAddress = undefined
export let web3Modal = undefined
export let chainId = null
export let TheHexagonContract = null

async function updateAccount(setWallet) {
  const accounts = await web3Modal.eth.getAccounts()
  localStorage.setItem('wallet', accounts[0])
  setWallet(accounts[0])

  if (web3ModalProvider !== undefined && web3ModalProvider !== null) {
    web3ModalProvider.on("accountsChanged", (accounts) => {
      localStorage.setItem('wallet', accounts[0])
      setWallet(accounts[0])
    });
    web3ModalProvider.on("chainChanged", (id) => {
      window.location.reload()
    });
  }
}

export async function initWallet(setWallet) {
  try {
    web3Modal = await connectToWallet()

    chainId = await web3Modal.eth.net.getId();
    TheHexagonContract = new web3Modal.eth.Contract(TheHexagonABI, TheHexagonContractAddress)

    await updateAccount(setWallet)
  } catch (e) {
    console.log("wallet connect error, reconnecting", e)
  }
}

export function updateAccountAddress(accounts) {
  if (accounts !== undefined && accounts.length > 0) {
    accountAddress = accounts[0]
  } else if (accountAddress !== undefined) {
    clearWalletProvider()
    accountAddress = undefined
  }
}

export function closeWalletProvider() {
  clearWalletProvider();
}