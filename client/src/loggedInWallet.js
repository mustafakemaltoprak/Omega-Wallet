import AccountBalance from './AccountBalance';
import Dropdown from './Dropdown';
import SendTransaction from './SendTransaction';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function LoggedInWallet() {
  const [toggledMain, setToggledMain] = useState(true);
  const [toggledTest, setToggledTest] = useState(false);

  const privateKey = useSelector((state) => state.storePrivateKey);

  const navigate = useNavigate();

  return privateKey ? (
    <>
      <Dropdown
        toggledMain={toggledMain}
        toggledTest={toggledTest}
        setToggledMain={setToggledMain}
        setToggledTest={setToggledTest}
      />
      <div className="typewriter-second">
        Omega Wallet <Typewriter />
      </div>
      <AccountBalance toggledMain={toggledMain} toggledTest={toggledTest} />
      <br></br>
      <SendTransaction toggledMain={toggledMain} toggledTest={toggledTest} />
    </>
  ) : (
    <>
      <div className="security-div">
        Hey there, at Omega Wallet we believe in your security.<br></br>{' '}
        <br></br>
        For this reason, we NEVER store any of your information on our servers.
        <br></br>
        <br></br>
        You will need to log back into your wallet if you refresh the page, we
        hope you understand.
      </div>
      <img
        className="security-image"
        src="https://ethereum.org/static/e7a074a56d991c4f9e65857bafa0f053/20da3/what-is-ethereum.webp"
      ></img>
      <button
        className="security-button"
        onClick={() => {
          navigate('/');
        }}
      >
        Click Here To Go Back
      </button>
    </>
  );
}
