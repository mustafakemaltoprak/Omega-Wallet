const walletAddress = (state = '', action) => {
  switch (action.type) {
    case 'SAVEWALLETADDRESS':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default walletAddress;
