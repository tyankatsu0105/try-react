import React, { FC } from 'react';
import queryQuery from '@api/graphql/pages/Query.graphql';
import { useQuery } from '@apollo/react-hooks';

const Query: FC = () => {
  const { loading, data } = useQuery(queryQuery);

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
