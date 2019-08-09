/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveStar
// ====================================================

export interface RemoveStar_removeStar {
  readonly __typename: "RemoveStarPayload";
  /**
   * A unique identifier for the client performing the mutation.
   */
  readonly clientMutationId: string | null;
}

export interface RemoveStar {
  /**
   * Removes a star from a Starrable.
   */
  readonly removeStar: RemoveStar_removeStar | null;
}

export interface RemoveStarVariables {
  readonly starrableId: string;
}
