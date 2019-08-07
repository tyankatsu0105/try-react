import React, { FunctionComponent, useEffect } from 'react';

const useChangeTitle = (props: string) => {
  useEffect(() => {
    document.title = `titleは${props}です`;
  }, [props]);
};

export const Effect: FunctionComponent = () => {
  useChangeTitle('aaa');

  return (
    <>
      <p>Effect</p>
    </>
  );
};
