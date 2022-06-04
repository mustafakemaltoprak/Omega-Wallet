export const savePrivateKey = (data) => {
  return {
    type: 'SAVEPRIVATEKEY',
    payload: data,
  };
};

export const saveWalletAddress = (data) => {
  return {
    type: 'SAVEWALLETADDRESS',
    payload: data,
  };
};
