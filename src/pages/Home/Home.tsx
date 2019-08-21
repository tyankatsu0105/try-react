import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

const Home: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>This is Home</title>
        <meta name="description" content="Home desc" />
      </Helmet>
      <p className="Home">Hi!!!</p>
      <p className="Home Home-2">This is</p>
      <p id="Home">Home</p>
      <small>:)</small>
      <p>{process.env.REACT_APP_NAME}</p>
    </>
  );
};

export default Home;
