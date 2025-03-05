import React, { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <>
      <Header />
      <button onClick={handleClick}>Click Me</button>
      {modal && <div>Modal</div>}
    </>
  );
};

export default App;
