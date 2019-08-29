/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrganization
// ====================================================

export interface GetOrganization_organization_repositories_nodes {
  readonly __typename: "Repository";
  /**
   * The name of the repository.
   */
  readonly name: string;
  /**
   * The HTTP URL for this repository
   */
  readonly url: any;
  /**
   * The description of the repository.
   */
  readonly description: string | null;
}

export interface GetOrganization_organization_repositories {
  readonly __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  readonly nodes: ReadonlyArray<(GetOrganization_organization_repositories_nodes | null)> | null;
}

export interface GetOrganization_organization {
  readonly __typename: "Organization";
  /**
   * A list of repositories that the user owns.
   */
  readonly repositories: GetOrganization_organization_repositories;
}

export interface GetOrganization {
  /**
   * Lookup a organization by login.
   */
  readonly organization: GetOrganization_organization | null;
}

export interface GetOrganizationVariables {
  readonly login: string;
  readonly first: number;
}
