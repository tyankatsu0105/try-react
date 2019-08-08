import React, { FunctionComponent } from 'react';
import { GetTyankatsuRepository } from '@api/graphql/queries/pages/__generated__/GetTyankatsuRepository';

export const Query: FunctionComponent<GetTyankatsuRepository> = ({
  user,
}: GetTyankatsuRepository) => {
  return (
    <>
      {user && user.repository && (
        <>
          <ul>
            <li>{user.repository.name}</li>
            <li>{user.repository.url}</li>
            <li>{String(user.repository.viewerHasStarred)}</li>
          </ul>
        </>
      )}
    </>
  );
};
