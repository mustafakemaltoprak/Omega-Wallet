import React, { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { ethers } = require('ethers');

export default function SendTransaction(props) {
  const [toggled, setToggled] = useState(true);

  const recipientInput = useRef(null);
  const amountInput = useRef(null);
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

  // Insert your own private key
  const wallet = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY, provider);

  async function sendTx(address, amount) {
    try {
      const tx = await wallet.sendTransaction({
        to: address,
        value: ethers.utils.parseEther(amount),
      });

      await tx.wait();
      toast.success('Your transaction was successful', { theme: 'dark' });
    } catch {
      toast.error('Your transaction failed', { theme: 'dark' });
    }
  }

  function toggle() {
    toggled ? setToggled(false) : setToggled(true);
  }

  return (
    <>
      {toggled ? (
        <div className="center-div">
          <img
            src="https://cdn-icons-png.flaticon.com/512/570/570221.png"
            onClick={() => {
              toggle();
            }}
            alt=""
            className="send-image"
            style={{ cursor: 'pointer' }}
          ></img>
          <br></br>
          <p style={{ marginTop: '5px' }}>Send</p>
        </div>
      ) : (
        <div className="center-div">
          <input
            className="input"
            placeholder="Recipient Address"
            ref={recipientInput}
            spellCheck="false"
          ></input>
          <span
            className="x"
            onClick={() => {
              toggle();
            }}
          >
            x
          </span>
          <br></br>
          <input
            className="input"
            placeholder="Amount ETH"
            ref={amountInput}
            spellCheck="false"
          ></input>
          <button
            className="confirm-button"
            onClick={() => {
              sendTx(recipientInput.current.value, amountInput.current.value);
            }}
          >
            Send
          </button>
          <ToastContainer />
        </div>
      )}
    </>
  );
}
