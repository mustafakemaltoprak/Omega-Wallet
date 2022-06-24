import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div className="security-div">
        Hey there, at Omega Wallet we believe in your security.<br></br>{' '}
        <br></br>
        For this reason, we NEVER store any of your information on our servers.
        <br></br>
        <br></br>
        You will need to log back into your wallet if you refresh or leave the
        page, we hope you understand.
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
