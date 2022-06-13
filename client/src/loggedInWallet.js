import AccountBalance from './AccountBalance';
import Dropdown from './Dropdown';
import SendTransaction from './SendTransaction';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function LoggedInWallet() {
  const [toggledMain, setToggledMain] = useState(true);
  const [toggledTest, setToggledTest] = useState(false);

  const navigate = useNavigate();

  const privateKey = useSelector((state) => state.storePrivateKey);

  useEffect(() => {
    if (!privateKey) {
      navigate('/error');
    }
  }, []);

  return (
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
  );
}
