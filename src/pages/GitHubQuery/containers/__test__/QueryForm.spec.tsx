import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MockedProvider } from '@apollo/react-testing';
import gqlGetOrganization from '../api/GetOrganization.graphql';

import { QueryForm } from '../QueryForm';

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

describe('QueryForm', () => {
  it('render', () => {
    const { baseElement } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <QueryForm />
      </MockedProvider>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
