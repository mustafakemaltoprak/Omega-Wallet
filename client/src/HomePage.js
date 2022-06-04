import React from 'react';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="typewriter">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Omega Wallet').start();
          }}
        />
      </div>
      <img
        className="homepage-picture"
        src="https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp"
      ></img>
      <div className="buttons-div">
        <button
          className="homepage-button"
          onClick={() => {
            navigate('/createWallet');
          }}
        >
          Create Wallet
        </button>
        <button
          onClick={() => {
            navigate('/importWallet');
          }}
          className="homepage-button"
        >
          Import Wallet
        </button>
      </div>
    </>
  );
}
