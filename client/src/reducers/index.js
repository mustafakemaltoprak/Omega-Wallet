import privateKey from './privateKey';
import walletAddress from './walletAddress';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  storePrivateKey: privateKey,
  storeWalletAddress: walletAddress,
});

export default allReducers;
