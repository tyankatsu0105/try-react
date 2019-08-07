import React, { FunctionComponent, createContext, useContext } from 'react';

const NameContext = createContext('tyankatsu');

const Parent: FunctionComponent = () => {
  return (
    <>
      <Child />
    </>
  );
};

const Child: FunctionComponent = () => {
  return (
    <div>
      <p>{useContext(NameContext)}</p>
    </div>
  );
};

const Context: FunctionComponent = () => {
  return (
    <div>
      <NameContext.Provider value="hogehoge">
        <Parent />
      </NameContext.Provider>
    </div>
  );
};

export default Context;
