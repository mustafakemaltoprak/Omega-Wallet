import AccountBalance from './AccountBalance';
import Dropdown from './Dropdown';
import ReadSmartContract from './ReadSmartContract';
import SendTransaction from './SendTransaction';
import React, { useState } from 'react';

function App() {
  const [toggledMain, setToggledMain] = useState(true);
  const [toggledTest, setToggledTest] = useState(false);
  return (
    <>
      <Dropdown
        toggledMain={toggledMain}
        toggledTest={toggledTest}
        setToggledMain={setToggledMain}
        setToggledTest={setToggledTest}
      />
      <AccountBalance toggledMain={toggledMain} toggledTest={toggledTest} />
      <br></br>
      <SendTransaction toggledMain={toggledMain} toggledTest={toggledTest} />
    </>
  );
}

export default App;
