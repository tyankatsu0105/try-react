/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ApiQuery
// ====================================================

export interface ApiQuery_organization_repositories_nodes_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface ApiQuery_organization_repositories_nodes {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: ApiQuery_organization_repositories_nodes_stargazers;
}

export interface ApiQuery_organization_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (ApiQuery_organization_repositories_nodes | null)[] | null;
}

export interface ApiQuery_organization {
  __typename: "Organization";
  /**
   * A list of repositories that the user owns.
   */
  repositories: ApiQuery_organization_repositories;
}

export interface ApiQuery {
  /**
   * Lookup a organization by login.
   */
  organization: ApiQuery_organization | null;
}
