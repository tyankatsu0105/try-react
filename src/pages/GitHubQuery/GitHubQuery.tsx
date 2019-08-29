import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import { QueryForm } from './containers';

const GitHubQuery: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>This is GitHubQuery</title>
      </Helmet>

      <QueryForm />
    </>
  );
};

export default GitHubQuery;
