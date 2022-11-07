
import './App.css';
import React, {useEffect, useState} from "react";
//import { ethers } from "ethers";

function App() {
  
  const [currentAccount, setCurrentAccount] = useState("")

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have an ETH wallet!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      // Pulls array of accounts
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Need an ETH wallet to connect to!");
        return;
      }

      // Makes request to connect to ETH account (Metamask wallet)
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);

      // Set the currAccount state within this component to know the address of the account
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
    <div className="App">
    <header className="App-header">

    {!currentAccount && (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      )}

    <button >
          Add Company
        </button>

    <button >
      Enroll
    </button>

    <button >
      Unenroll
    </button>

    <button >
      See Attendees
    </button>
    </header>
  </div>
  );
}

export default App;
