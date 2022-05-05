import { useState } from "react";
import Home from "./components/Home/Home";
import Web3 from "web3";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import CollectionCard from "./components/CollectionCard/CollectionCard";
import Navigation from "./components/Navigation";
import TokenAbi from "./contracts/Tokenabi.json";
import CrowdsaleAbi from "./contracts/presale.json";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol,setTokenSymbol]= useState("");
  const [decimaloftoken,setDecimalOfToken] = useState("");
  const [totalSupplyofToken,setTotalSupplyofToken]= useState("");
  const [balanceOfUserinwei,setBalanceOfUserinwei] = useState("");
  const [devTokenContract,setDevTokenContract] = useState("");

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );
      const networkId = await web3.eth.net.getId();
      if (networkId == 42) {
        const devtokencontract = new web3.eth.Contract(
          TokenAbi.abi,
          "0x7FA24607EcB6Ca6F2009414ec6669BE34060F256"
        );
        const nameoftoken = await devtokencontract.methods.name().call();
        const decimaloftoken = await devtokencontract.methods.decimals().call();
        const symboloftoken = await devtokencontract.methods.symbol().call();
        const totalsupplyoftoken = await devtokencontract.methods.totalSupply().call();
        const balanceofuser = await devtokencontract.methods.balanceOf(accounts[0]).call();
        const balanceofuserinwei = await web3.utils.fromWei(balanceofuser,'ether');

        setTokenName(nameoftoken);
        setTokenSymbol(symboloftoken);
        setDecimalOfToken(decimaloftoken);
        setTotalSupplyofToken(totalsupplyoftoken);
        setBalanceOfUserinwei(balanceofuserinwei);
        setDevTokenContract(devtokencontract);
      }
      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    } else {
      window.alert("the contract not deployed to detected network.");
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };

  return (
    <div>
      <Navigation currentAccount={currentAccount} />
      <main>
        {!isConnected && (
          <ConnectWallet onLogin={onLogin} onLogout={onLogout} />
        )}
        {isConnected && (
          <Home
            currentAccount={currentAccount}
            balance={balance}
            tokenName={tokenName}
            tokenSymbol={tokenSymbol}
            decimaloftoken={decimaloftoken}
            totalSupplyofToken={totalSupplyofToken}
            balanceOfUserinwei={balanceOfUserinwei}
            devTokenContract={devTokenContract}
          />
        )}
      </main>
      <CollectionCard />
    </div>
  );
}

export default App;
