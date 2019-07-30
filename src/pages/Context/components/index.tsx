import React, { FC, createContext, useContext } from 'react';

const NameContext = createContext('tyankatsu');

const Parent: FC = () => {
  return (
    <>
      <Child />
    </>
  );
};

const Child: FC = () => {
  return (
    <div>
      <p>{useContext(NameContext)}</p>
    </div>
  );
};

const Context: FC = () => {
  return (
    <div>
      <NameContext.Provider value="hogehoge">
        <Parent />
      </NameContext.Provider>
    </div>
  );
};

export default Context;
