import React, { FunctionComponent } from 'react';
import gqlApi from '@api/graphql/queries/pages/Api.graphql';
import { useQuery } from '@apollo/react-hooks';
import {
  GetTyankatsuRepository,
  GetTyankatsuRepositoryVariables,
} from '@api/graphql/queries/pages/__generated__/GetTyankatsuRepository';

export const Query: FunctionComponent = () => {
  const variables: GetTyankatsuRepositoryVariables = {
    login: 'tyankatsu0105',
    name: 'try-react',
  };
  const { loading, error, data, refetch } = useQuery<GetTyankatsuRepository>(
    gqlApi,
    {
      variables,
    }
  );

  if (loading) return <p>Loading......</p>;
  if (error) return <p>Opps! Error! ${error.message}</p>;

  return (
    <>
      {data && data.user && data.user.repository && (
        <>
          <ul>
            <li>{data.user.repository.name}</li>
            <li>{data.user.repository.url}</li>
          </ul>
          <button type="button" onClick={() => refetch()}>
            refetch
          </button>
        </>
      )}
    </>
  );
};
