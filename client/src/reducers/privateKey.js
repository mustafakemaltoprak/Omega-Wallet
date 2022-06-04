const privateKey = (state = '', action) => {
  switch (action.type) {
    case 'SAVEPRIVATEKEY':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default privateKey;
