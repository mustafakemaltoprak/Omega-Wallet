import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePrivateKey, saveWalletAddress } from './actions';
const { ethers } = require('ethers');

export default function ImportWalletPage() {
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div className="container-div">
      <div className="intro-div">
        Import your private key below.
        <br></br>
      </div>
      <input
        className="input"
        ref={inputRef}
        placeholder="Input private key"
      ></input>
      <button
        className="confirm-button"
        onClick={async () => {
          dispatch(savePrivateKey(inputRef.current.value));
          let wallet = new ethers.Wallet(inputRef.current.value);
          dispatch(saveWalletAddress(wallet.address));
          navigate('/details');
        }}
      >
        Confirm
      </button>
      <div>
        <img
          className="create-wallet-image"
          src="https://ethereum.org/static/4d030a46f561e5c754cabfc1a97528ff/3ba1a/impact_transparent.webp"
        ></img>
      </div>
    </div>
  );
}
