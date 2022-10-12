const isMetamaskConnected = async () => {
	const { ethereum } = window;
	if (!ethereum) {
		console.log("Make sure you have Metamask installed");
		return false;
	} else {
		console.log("Wallet exists! We're ready");
	}
	
	const accounts = await ethereum.request({ method: 'eth_accounts'});
	
	if (accounts.length !== 0) {
		const account = accounts[0];
		console.log("Found an authorized account: ", account);
		return true;
	} else {
		console.log("No authorized account found");
		return false;
	}
}

export default isMetamaskConnected;