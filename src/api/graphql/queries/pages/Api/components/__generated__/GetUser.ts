/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user_repository {
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

export interface GetUser_user {
  readonly __typename: "User";
  /**
   * Find Repository.
   */
  readonly repository: GetUser_user_repository | null;
}

export interface GetUser {
  /**
   * Lookup a user by login.
   */
  readonly user: GetUser_user | null;
}

export interface GetUserVariables {
  readonly login: string;
  readonly name: string;
}
