import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { MockedProvider } from '@apollo/react-testing';
import gqlGetOrganization from '../containers/api/GetOrganization.graphql';

import GitHubQuery from '../GitHubQuery';

const mocks = [
  {
    request: {
      query: gqlGetOrganization,
      variables: {
        login: 'facebook',
        first: 1,
      },
    },
    result: {
      data: {
        organization: {
          repositories: {
            nodes: [
              {
                name: 'codemod',
                description:
                  'Codemod is a tool/library to assist you with large-scale codebase refactors that can be partially automated but still require human oversight and occasional intervention. Codemod was developed at Facebook and released as open source.',
                url: 'https://github.com/facebook/codemod',
              },
            ],
          },
        },
      },
    },
  },
];

describe('GitHubQuery', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={['/']}>
          <GitHubQuery />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
