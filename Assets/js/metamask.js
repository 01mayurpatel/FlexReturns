function connectingMetaMask(){

    const {ethereum} = window;
    const isMetaMaskInstalled = ()=>{

        return ethereum && ethereum.isMetaMask;
    }
    if(!isMetaMaskInstalled()){
        
        alert("MetaMask is not installed");
        window.open("https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",'_blank');
        
    }else{
        console.log("metamaskis installed")
    }
    
    let account;
    ethereum.request({method:'eth_requestAccounts'}).then(accounts=>{
        
        account = accounts[0];
        console.log(account);
    });
}