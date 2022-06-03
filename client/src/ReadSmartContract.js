import React, { useEffect, useState } from 'react';
const { ethers } = require('ethers');

export default function ReadSmartContract() {
  const [name, setName] = useState('...');
  const [symbol, setSymbol] = useState('...');

  const provider = new ethers.providers.JsonRpcProvider(
    // Create an account on Infura to receive your own API Key
    `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
  );

  const ERC20_ABI = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function balanceOf(address) view returns (uint)',
  ];

  const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI Contract
  const contract = new ethers.Contract(address, ERC20_ABI, provider);

  useEffect(() => {
    async function toUseAwait() {
      setName(await contract.name());
      setSymbol(await contract.symbol());

      const balance = await contract.balanceOf(
        '0x6c6Bc977E13Df9b0de53b251522280BB72383700'
      );
    }
    toUseAwait();
  }, []);

  return (
    <div>
      Name: {name}
      <br></br>
      Symbol: {symbol}
    </div>
  );
}
