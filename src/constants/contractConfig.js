import web3 from './web3';
import abiHoney from './abiHoney.json';
import abiNFT from './abiNFT.json';
import abiStaking from './abiStaking';

const addrHoney = '0xe781B9ef76ed615916bAC62D69BbFe5946BB1723';
const addrStaking = '0x3BC4587583A285dd91F4b78D387C50edd4823F85';
export const addrNFT = '0x5c80e3a14384f8c018f0db7d35cf266d8037514f';

export const contractHoney = new web3.eth.Contract(abiHoney, addrHoney);
export const contractNFT = new web3.eth.Contract(abiNFT, addrNFT);
export const contractStaking = new web3.eth.Contract(abiStaking, addrStaking);