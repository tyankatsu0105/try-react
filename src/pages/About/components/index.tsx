import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from '@emotion/styled';
// import spinach from './assets/images/spinach.png';

type AboutProps = RouteComponentProps;

const ButtonWrap = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  &:hover {
    box-shadow: 0 0 10px #ccc;
  }
`;

const About: FC<AboutProps> = ({ match, history }: AboutProps) => {
  return (
    <>
      <h1>{match.path}</h1>
      <p>
        <img src="./assets/images/spinach.png" alt="" />
      </p>
      <ButtonWrap>
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          戻る
        </Button>
      </ButtonWrap>
    </>
  );
};

export default withRouter(About);
