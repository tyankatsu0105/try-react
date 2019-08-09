/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddStar
// ====================================================

export interface AddStar_addStar {
  readonly __typename: "AddStarPayload";
  /**
   * A unique identifier for the client performing the mutation.
   */
  readonly clientMutationId: string | null;
}

export interface AddStar {
  /**
   * Adds a star to a Starrable.
   */
  readonly addStar: AddStar_addStar | null;
}

export interface AddStarVariables {
  readonly starrableId: string;
}
