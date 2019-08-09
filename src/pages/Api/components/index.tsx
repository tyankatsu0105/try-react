import React, { FunctionComponent } from 'react';
import { QueryContainer as Query } from '@pages/Api/components/Query/containers';
import { MutationContainer as Mutation } from '@pages/Api/components/Mutation/containers';

const Api: FunctionComponent = () => {
  return (
    <>
      <Query />
      <Mutation />
    </>
  );
};

export default Api;
