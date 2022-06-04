import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
const { ethers } = require('ethers');

export default function AccountBalance(props) {
  const [walletBalance, setWalletBalance] = useState(0);
  const [ethCurrentPrice, setEthCurrentPrice] = useState(0);

  const walletAddress = useSelector((state) => state.storeWalletAddress);

  let provider;

  let ethHoldingsInUsd;

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

    ethHoldingsInUsd = ethCurrentPrice * walletBalance;
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

    ethHoldingsInUsd = ethCurrentPrice * walletBalance;
  }

  async function toUseAwait() {
    const balance = await provider.getBalance(walletAddress);
    setWalletBalance(ethers.utils.formatEther(balance));
  }
  toUseAwait();

  return (
    <>
      <div className="wallet-address">
        <span
          onClick={() => {
            navigator.clipboard.writeText(walletAddress);
          }}
          className="wallet-address-span"
        >
          {walletAddress.substring(0, 5) +
            '...' +
            walletAddress.substring(
              walletAddress.length - 10,
              walletAddress.length
            )}
        </span>
      </div>
      <div className="balance">
        <img
          className="eth-image"
          src="https://cdn-icons-png.flaticon.com/512/7212/7212730.png"
        ></img>
        <span className="balance-amount">{walletBalance} ETH</span>
        <br></br>
        <span className="balance-USD">{ethHoldingsInUsd}$</span>
      </div>
    </>
  );
}
