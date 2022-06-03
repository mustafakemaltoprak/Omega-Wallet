import React, { useState } from 'react';
const { ethers } = require('ethers');

export default function AccountBalance(props) {
  const [walletBalance, setWalletBalance] = useState('...');

  const address = '0x79B23B60Dc3351354CcB817f79641a9163F453F3';

  let provider;

  if (props.toggledTest) {
    provider = new ethers.providers.JsonRpcProvider(
      // Create an account on Infura to receive your own API Key
      `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    );
  }

  if (props.toggledMain) {
    provider = new ethers.providers.JsonRpcProvider(
      // Create an account on Infura to receive your own API Key
      `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    );
  }

  async function toUseAwait() {
    const balance = await provider.getBalance(address);
    setWalletBalance(ethers.utils.formatEther(balance));
  }
  toUseAwait();

  return (
    <>
      <div className="wallet-address">
        {address.substring(0, 5) +
          '...' +
          address.substring(address.length - 10, address.length)}
      </div>
      <div className="balance">
        <img
          className="eth-image"
          src="https://cdn-icons-png.flaticon.com/512/7212/7212730.png"
        ></img>
        <span className="balance-amount">{walletBalance} ETH</span>
      </div>
    </>
  );
}
