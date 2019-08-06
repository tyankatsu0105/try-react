import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { concat } from 'apollo-link';
import { authMiddleware } from './middleware';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const link = concat(authMiddleware, httpLink);
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});
