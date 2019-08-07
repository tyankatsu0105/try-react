import React, { FC } from 'react';
import gqlApi from '@api/graphql/queries/pages/Api.graphql';
import { useQuery } from '@apollo/react-hooks';
import { ApiQuery_organization_repositories_nodes } from '@api/graphql/queries/pages/__generated__/ApiQuery';

const Api: FC = () => {
  const { loading, data } = useQuery(gqlApi);

  return (
    <>
      {loading ? (
        <p>Loading ......</p>
      ) : (
        <ul>
          {data.organization.repositories.nodes.map(
            (node: ApiQuery_organization_repositories_nodes, index: number) => (
              <li key={node.id}>
                <h1>{index + 1}</h1>
                <a href={node.url}>{node.name}</a>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Api;
