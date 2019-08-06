import React, { FC } from 'react';
import ApiQuery from '@api/graphql/queries/pages/Api.graphql';
import { useQuery } from '@apollo/react-hooks';

const Api: FC = () => {
  const { loading, data } = useQuery(ApiQuery);

  return (
    <>
      {loading ? (
        <p>Loading ......</p>
      ) : (
        <ul>
          {data.organization.repositories.nodes.map((node, index) => (
            <li key={node.id}>
              <h1>{index + 1}</h1>
              <a href={node.url}>{node.name}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Api;
