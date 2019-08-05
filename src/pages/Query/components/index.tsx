import React, { FC } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const query = gql`
  query {
    organization(login: "apollographql") {
      repositories(first: 5) {
        nodes {
          id
          name
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const Query: FC = () => {
  const { loading, data } = useQuery(query);

  return (
    <>
      {loading ? (
        <p>Loading ......</p>
      ) : (
        <p>{data.organization.repositories.nodes[0].name}</p>
      )}
    </>
  );
};

export default Query;
