import React, { FC, useEffect } from 'react';

const useChangeTitle = (props: string) => {
  useEffect(() => {
    document.title = `titleは${props}です`;
  }, [props]);
};

export const Effect: FC = () => {
  useChangeTitle('aaa');

  return (
    <>
      <p>Effect</p>
    </>
  );
};
