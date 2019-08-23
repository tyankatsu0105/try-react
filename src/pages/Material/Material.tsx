import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';

const Material: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>This is Material</title>
      </Helmet>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
};

export default Material;
