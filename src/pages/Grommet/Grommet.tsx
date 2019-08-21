import React, { FunctionComponent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Button, Stack, Text } from 'grommet';
import { Notification, Chrome } from 'grommet-icons';
import styled from '@emotion/styled';

const Grommet: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const Rotate = styled.div`
    display: flex;
    transform-origin: center;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  return (
    <>
      <Helmet>
        <title>This is Grommet</title>
      </Helmet>

      <Box
        direction="row"
        align="center"
        border={{ color: 'brand', size: 'large' }}
        pad="medium"
      >
        <Button label="increase" onClick={increase} />

        <Stack anchor="bottom-right">
          <Notification size="large" />
          <Box background="brand" pad={{ horizontal: 'xsmall' }} round>
            <Text>{count}</Text>
          </Box>
        </Stack>

        <Rotate>
          <Chrome color="brand"></Chrome>
        </Rotate>
      </Box>
    </>
  );
};

export default Grommet;
