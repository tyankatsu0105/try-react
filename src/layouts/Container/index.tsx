import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Header } from '@layouts/Header';
import { Footer } from '@layouts/Footer';

import { MainProps } from '@interfaces/MainProps';

const Div = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 980px;
  margin: calc(var(--spacer-base) * 2) auto;
  font-size: 1.6rem;
`;

export const Container: FC = (props: MainProps) => {
  return (
    <Div>
      <Header />
      <div>
        <Main>{props.children}</Main>
      </div>
      <Footer />
    </Div>
  );
};
