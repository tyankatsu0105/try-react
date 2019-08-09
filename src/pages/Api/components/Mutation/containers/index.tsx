import React, { FunctionComponent } from 'react';
import { Mutation } from '../components';
import gqlAddStar from '@api/graphql/queries/pages/Api/components/AddStar.graphql';
import gqlRemoveStar from '@api/graphql/queries/pages/Api/components/RemoveStar.graphql';
import gqlCreateIssue from '@api/graphql/queries/pages/Api/components/CreateIssue.graphql';
import {
  CreateIssue,
  CreateIssueVariables,
} from '@api/graphql/queries/pages/Api/components/__generated__/CreateIssue';
import {
  AddStar,
  AddStarVariables,
} from '@api/graphql/queries/pages/Api/components/__generated__/AddStar';
import {
  RemoveStar,
  RemoveStarVariables,
} from '@api/graphql/queries/pages/Api/components/__generated__/RemoveStar';
import { useMutation } from '@apollo/react-hooks';

export const MutationContainer: FunctionComponent = () => {
  const [createIssue, { data: createIssueData }] = useMutation<
    CreateIssue,
    CreateIssueVariables
  >(gqlCreateIssue);

  const [addStar, { data: addStarData }] = useMutation<
    AddStar,
    AddStarVariables
  >(gqlAddStar, {
    variables: {
      starrableId: process.env.REACT_APP_REPOSITORY_ID,
    },
  });

  const [removeStar, { data: removeStarData }] = useMutation<
    RemoveStar,
    RemoveStarVariables
  >(gqlRemoveStar, {
    variables: {
      starrableId: process.env.REACT_APP_REPOSITORY_ID,
    },
  });

  interface Hoge {
    createIssueData: CreateIssue;
    addStarData: AddStar;
    removeStarData: RemoveStar;
  }

  let data: Hoge = {};
  if (createIssueData && addStarData && removeStarData) {
    data = { createIssueData, addStarData, removeStarData };
  }

  return (
    <>
      <Mutation
        {...data}
        createIssue={createIssue}
        addStar={addStar}
        removeStar={removeStar}
      />
    </>
  );
};
