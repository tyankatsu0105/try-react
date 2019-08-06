import { ApolloLink } from 'apollo-link';

export const authMiddleware = new ApolloLink((operation, forward) => {
  if (typeof forward === 'undefined') return null;
  operation.setContext({
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });

  return forward(operation);
});
