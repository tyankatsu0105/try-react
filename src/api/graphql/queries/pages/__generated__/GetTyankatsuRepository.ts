/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTyankatsuRepository
// ====================================================

export interface GetTyankatsuRepository_user_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
}

export interface GetTyankatsuRepository_user {
  __typename: "User";
  /**
   * Find Repository.
   */
  repository: GetTyankatsuRepository_user_repository | null;
}

export interface GetTyankatsuRepository {
  /**
   * Lookup a user by login.
   */
  user: GetTyankatsuRepository_user | null;
}

export interface GetTyankatsuRepositoryVariables {
  login: string;
  name: string;
}
