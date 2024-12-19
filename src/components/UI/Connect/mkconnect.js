import React, { useState } from 'react';
import { ethers } from 'ethers';

const Connect = () => {
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Solicitar acceso a la cuenta del usuario
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Crear una instancia de ethers.js
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log('Cuenta conectada:', address);
      } catch (error) {
        console.error('Error al conectar a MetaMask:', error);
      }
    } else {
      console.error('MetaMask no está instalado');
      alert('MetaMask no está instalado');
    }
  };

  return (
    <div>
      <h1>Conectar a MetaMask</h1>
      <button onClick={connectToMetaMask}>Conectar a MetaMask</button>
      {account && <p>Cuenta conectada: {account}</p>}
    </div>
  );
};

export default Connect;
