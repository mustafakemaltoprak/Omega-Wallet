import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoggedInWallet from './loggedInWallet';
import HomePage from './HomePage';
import CreateWalletPage from './CreateWalletPage';
import ImportWalletPage from './ImportWalletPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/details" element={<LoggedInWallet />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/createWallet" element={<CreateWalletPage />} />
        <Route path="/importWallet" element={<ImportWalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
