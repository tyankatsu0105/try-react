import React, { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
  return (
    <>
      <p className="Home">Hi!!!</p>
      <p className="Home Home-2">This is</p>
      <p id="Home">Home</p>
      <small>:)</small>
      <p>{process.env.REACT_APP_NAME}</p>
    </>
  );
};

export default Home;
