import React from 'react';

export default function Dropdown(props) {
  return (
    <div className="dropdown">
      <button className="dropbtn">Choose Network</button>
      <div className="dropdown-content">
        <a
          onClick={() => {
            props.setToggledMain(true);
            props.setToggledTest(false);
          }}
        >
          Ethereum Mainnet
        </a>
        <a
          onClick={() => {
            props.setToggledTest(true);
            props.setToggledMain(false);
          }}
        >
          Kovan Test Network
        </a>
      </div>
    </div>
  );
}
