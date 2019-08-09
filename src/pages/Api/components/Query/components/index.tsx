import React, { FunctionComponent } from 'react';
import { GetUser } from '@api/graphql/queries/pages/Api/components/__generated__/GetUser';

export const Query: FunctionComponent<GetUser & { refetch: () => void }> = (
  props
) => {
  const { user, refetch } = props;
  return (
    <>
      {user && user.repository && (
        <>
          <ul>
            <li>{user.repository.name}</li>
            <li>{user.repository.url}</li>
            <li>{String(user.repository.viewerHasStarred)}</li>
          </ul>

          <button type="button" onClick={() => refetch()}>
            refetch
          </button>
        </>
      )}
    </>
  );
};
