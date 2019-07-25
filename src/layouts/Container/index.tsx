import React, { FC } from 'react';
import styled from '@emotion/styled';
import { LayoutProps } from '@interfaces/LayoutProps';

const Div = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto;
  min-height: 100vh;
`;

export const Container: FC = (props: LayoutProps) => {
  return <Div>{props.children}</Div>;
};
