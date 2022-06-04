import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePrivateKey, saveWalletAddress } from './actions';
const { ethers } = require('ethers');

export default function CreateWalletPage() {
  const wallet = ethers.Wallet.createRandom();
  const dispatch = useDispatch();

  const privateKey = wallet.privateKey;
  const walletAddress = wallet.address;

  dispatch(saveWalletAddress(walletAddress));
  dispatch(savePrivateKey(privateKey));

  const navigate = useNavigate();

  return (
    <div className="container-div">
      <div>Thank you for trusting Omega Wallet!</div>
      <br></br>
      <div>
        This is your private key, please keep it safe and secure. You will need
        this key when logging back into your wallet.
        <br></br>
        <br></br>
        {privateKey}
      </div>
      <button
        onClick={() => {
          navigate('/details');
        }}
        className="continue-button"
      >
        Continue to your wallet
      </button>
      <div>
        <img
          className="create-wallet-image"
          src="https://ethereum.org/static/5dea0acbc8484c42006d7bbed32fa019/d1bb0/doge-computer.webp"
        ></img>
      </div>
    </div>
  );
}
