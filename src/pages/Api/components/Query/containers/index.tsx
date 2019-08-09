import React, { FunctionComponent } from 'react';
import gqlGetUser from '@api/graphql/queries/pages/Api/components/GetUser.graphql';
import { useQuery } from '@apollo/react-hooks';
import {
  GetUser,
  GetUserVariables,
} from '@api/graphql/queries/pages/Api/components/__generated__/GetUser';

import { Query } from '../components/index';

export const QueryContainer: FunctionComponent = () => {
  const variables: GetUserVariables = {
    login: 'tyankatsu0105',
    name: 'try-react',
  };
  const { loading, error, data, refetch } = useQuery<GetUser>(gqlGetUser, {
    variables,
  });

  if (loading) return <p>Loading......</p>;
  if (error) return <p>Opps! Error! {error.message}</p>;

  return <>{data ? <Query {...data} refetch={refetch} /> : null}</>;
};
