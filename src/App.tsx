import React, { FC } from 'react';
import { Header } from '@layouts/Header';
import { Footer } from '@layouts/Footer';
import { Container } from '@layouts/Container';

export const App: FC = () => {
  return (
    <Container>
      <Header />
      <main>contents</main>
      <Footer />
    </Container>
  );
};
