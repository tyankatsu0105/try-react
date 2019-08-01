import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  useEffect,
} from 'react';
import styled from '@emotion/styled';

const useChangeTitle = (props: string) => {
  useEffect(() => {
    document.title = `titleは${props}です`;
  }, [props]);
};

export const State: FC = () => {
  const [state, setState] = useState(0);
  const [name, setName] = useState({
    hoge: '佐藤',
    fuga: '田中',
  });

  useChangeTitle(String(state));

  useEffect(() => {
    document.body.classList.add(name.hoge);
    return () => {
      alert(name.hoge);
    };
  }, [name.hoge]);

  const handleIncreaseState = useCallback(() => {
    setState(state + 1);
  }, [state]);

  const handleDecreaseState = useCallback(() => {
    setState(state - 1);
  }, [state]);

  const handleUpdateName = (event: ChangeEvent<HTMLInputElement>) => {
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
