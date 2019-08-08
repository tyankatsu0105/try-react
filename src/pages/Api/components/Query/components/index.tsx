import React, { FunctionComponent } from 'react';
import { GetTyankatsuRepository } from '@api/graphql/queries/pages/__generated__/GetTyankatsuRepository';
import { ObservableQuery } from 'apollo-client/core/ObservableQuery';

ObservableQuery;

export const Query: FunctionComponent<
  GetTyankatsuRepository & { refetch: () => void }
> = (props) => {
  const { user } = props;
  return (
    <>
      {user && user.repository && (
        <>
          <ul>
            <li>{user.repository.name}</li>
            <li>{user.repository.url}</li>
            <li>{String(user.repository.viewerHasStarred)}</li>
          </ul>

          <button type="button" onClick={() => props.refetch()}>
            refetch
          </button>
        </>
      )}
    </>
  );
};
