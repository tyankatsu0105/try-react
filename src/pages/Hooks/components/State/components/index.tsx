import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

export const State: FC = () => {
  const [state, setState] = useState(0);
  const [name, setName] = useState({
    hoge: '佐藤',
    fuga: '田中',
  });
  const handleIncreaseState = () => {
    setState(state + 1);
  };
  const handleDecreaseState = () => {
    setState(state - 1);
  };

  interface Event {
    target: {
      name: string;
      value: string;
    };
  }

  const handleUpdateName = (event: Event) => {
    setName({
      ...name,
      [event.target.name]: event.target.value,
    });
  };

  const Button = styled.button`
    padding: 8px 12px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
  `;
  return (
    <>
      <p>現在stateは{state}</p>
      <Button type="button" onClick={handleIncreaseState}>
        増える
      </Button>
      <Button type="button" onClick={handleDecreaseState}>
        減る
      </Button>
      <hr />
      <p>hogeの名前は{name.hoge}</p>
      <p>fugaの名前は{name.fuga}</p>
      <input
        type="text"
        onChange={handleUpdateName}
        value={name.hoge}
        name="hoge"
      />
      <input
        type="text"
        onChange={handleUpdateName}
        value={name.fuga}
        name="fuga"
      />
    </>
  );
};
