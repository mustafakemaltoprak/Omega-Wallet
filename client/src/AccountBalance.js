import React, { useEffect, useState } from 'react';
const { ethers } = require('ethers');

export default function AccountBalance(props) {
  const [walletBalance, setWalletBalance] = useState(0);
  const [ethCurrentPrice, setEthCurrentPrice] = useState(0);

  const address = '0x79B23B60Dc3351354CcB817f79641a9163F453F3';

  let provider;

  let testing;

  if (props.toggledTest) {
    provider = new ethers.providers.JsonRpcProvider(
      // Create an account on Infura to receive your own API Key
      `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    );

    fetch(
      'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key{8d7e069494e23f4a6402010ca6e2c31aaf34f0e25c4f6a0385381ad13eda46b3}'
    )
      .then((res) => res.json())
      .then((result) => setEthCurrentPrice(result.USD));

    testing = ethCurrentPrice * walletBalance;
  }

  if (props.toggledMain) {
    provider = new ethers.providers.JsonRpcProvider(
      // Create an account on Infura to receive your own API Key
      `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    );

    fetch(
      'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key{8d7e069494e23f4a6402010ca6e2c31aaf34f0e25c4f6a0385381ad13eda46b3}'
    )
      .then((res) => res.json())
      .then((result) => setEthCurrentPrice(result.USD));

    testing = ethCurrentPrice * walletBalance;
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
        <br></br>
        <span className="balance-USD">
          {!testing
            ? testing
            : testing.toString().substring(0, testing.toString().length - 13)}
          $
        </span>
      </div>
    </>
  );
}
