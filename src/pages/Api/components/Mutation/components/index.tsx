import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import {
  CreateIssueFunction,
  AddStarFunction,
  RemoveStarFunction,
} from '@modules/Mutation';

import { CreateIssue } from '@api/graphql/queries/pages/Api/components/__generated__/CreateIssue';
import { AddStar } from '@api/graphql/queries/pages/Api/components/__generated__/AddStar';
import { RemoveStar } from '@api/graphql/queries/pages/Api/components/__generated__/RemoveStar';

type MutationProps = {
  createIssue: CreateIssueFunction;
  addStar: AddStarFunction;
  removeStar: RemoveStarFunction;
  createIssueData: CreateIssue;
  addStarData: AddStar;
  removeStarData: RemoveStar;
};

export const Mutation: FunctionComponent<MutationProps> = (props) => {
  const {
    createIssue,
    addStar,
    removeStar,
    createIssueData,
    addStarData,
    removeStarData,
  } = props;

  const [form, setForm] = useState({
    title: '',
    body: '',
  });

  const handleInputForm = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {props && (
        <>
          <hr />
          <p>issue作る</p>
          <form action="">
            <input
              type="text"
              placeholder="issueタイトル"
              onChange={handleInputForm}
              value={form.title}
              name="title"
            />
            <input
              type="text"
              placeholder="本文"
              onChange={handleInputForm}
              value={form.body}
              name="body"
            />
            <button
              type="button"
              onClick={() =>
                createIssue({
                  variables: {
                    repositoryId: process.env.REACT_APP_REPOSITORY_ID,
                    title: form.title,
                    body: form.body,
                  },
                })
              }
            >
              issue作成
            </button>
          </form>

          {createIssueData &&
            createIssueData.createIssue &&
            String(JSON.stringify(createIssueData.createIssue, null, 2))}

          <hr />
          <a
            href="https://github.com/tyankatsu0105/try-react"
            target="noopener noreferrer"
            rel="noopener"
          >
            ここにstarが反映されます
          </a>
          <button type="button" onClick={() => addStar()}>
            star付与
          </button>
          {addStarData &&
            addStarData.addStar &&
            String(addStarData.addStar.clientMutationId)}
          <button type="button" onClick={() => removeStar()}>
            star削除
          </button>
          {removeStarData &&
            removeStarData.removeStar &&
            String(removeStarData.removeStar.clientMutationId)}
        </>
      )}
    </>
  );
};
