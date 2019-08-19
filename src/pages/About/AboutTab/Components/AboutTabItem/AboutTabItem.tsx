import React, { FunctionComponent, useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
  background-color: #333;

  & + & {
    border-top: 1px solid #eee;
  }
`;

const Dl = styled.dl`
  & + & {
    margin-top: 10px;
  }
`;
const Dt = styled.dt`
  padding: 10px;
`;
const Dd = styled.dd`
  padding: 10px;
`;

interface Props {
  id: number;
  name: string;
  age: number;
}

const data = [
  {
    id: 1,
    name: '太郎',
    age: 25,
  },
  {
    id: 2,
    name: '花子',
    age: 20,
  },
  {
    id: 3,
    name: 'ジュニア',
    age: 1,
  },
];

interface MatchParams {
  userId: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export const AboutTabItem: FunctionComponent<Props> = ({ match }) => {
  const filterdData = useMemo(() => {
    return data.find((item) => {
      return item.id.toString() === match.params.userId;
    });
  }, [match.params.userId]);

  return (
    <>
      {filterdData && (
        <Dl>
          <Row>
            <Dt>名前</Dt>
            <Dd>{filterdData.name}</Dd>
          </Row>
          <Row>
            <Dt>年齢</Dt>
            <Dd>{filterdData.age}</Dd>
          </Row>
        </Dl>
      )}
    </>
  );
};
