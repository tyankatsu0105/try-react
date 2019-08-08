/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTyankatsuRepository
// ====================================================

export interface GetTyankatsuRepository_user_repository {
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
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  readonly viewerHasStarred: boolean;
}

export interface GetTyankatsuRepository_user {
  readonly __typename: "User";
  /**
   * Find Repository.
   */
  readonly repository: GetTyankatsuRepository_user_repository | null;
}

export interface GetTyankatsuRepository {
  /**
   * Lookup a user by login.
   */
  readonly user: GetTyankatsuRepository_user | null;
}

export interface GetTyankatsuRepositoryVariables {
  readonly login: string;
  readonly name: string;
}
