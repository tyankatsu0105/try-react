import React, { FC } from 'react';
import styled from '@emotion/styled';

const Copyright = styled.small`
  display: block;
  padding: 20px 0;
  text-align: center;
`;

export const Footer: FC = () => {
  return (
    <footer>
      <Copyright>
        Copyright © 2019 tyankatsu Co.,Ltd. All rights reserved.
      </Copyright>
    </footer>
  );
};
