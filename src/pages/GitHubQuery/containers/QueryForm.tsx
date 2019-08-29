import React, { FunctionComponent } from 'react';

import { useQuery } from '@apollo/react-hooks';
import gqlGetOrganization from './api/GetOrganization.graphql';
import {
  GetOrganization,
  GetOrganizationVariables,
} from './api/__generated__/GetOrganization';

import { QueryFormComponent } from '../components';

export const QueryForm: FunctionComponent = () => {
  const variables: GetOrganizationVariables = {
    login: '',
    first: 0,
  };
  const { loading, data, refetch } = useQuery<GetOrganization>(
    gqlGetOrganization,
    {
      variables,
    }
  );

  const props = {
    loading,
    data,
    refetch,
  };

  return (
    <>
      <QueryFormComponent {...props} />
    </>
  );
};
