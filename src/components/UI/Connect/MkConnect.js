import React, { useState } from 'react';
import { ethers } from 'ethers';
import './Connect.scss';

const Connect = () => {
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Asking connection
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // creating  ethers.js instance
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log('Account:', address);
      } catch (error) {
        console.error('Error can not connect to MetaMask Wallet:', error);
      }
    } else {
      console.error('MetaMask is not installed');
      alert('MetaMask is not installed');
    }
  };

  return (
    <div>
      <h1>Connect to MetaMask</h1>
      <button class=".u-button" onClick={connectToMetaMask}>Connect to MetaMask</button>
      {account && <p>Account: {account}</p>}
    </div>
  );
};

export default MkConnect;
