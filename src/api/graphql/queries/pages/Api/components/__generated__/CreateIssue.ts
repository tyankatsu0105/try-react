/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateIssue
// ====================================================

export interface CreateIssue_createIssue_issue {
  readonly __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  readonly title: string;
  /**
   * Identifies the body of the issue.
   */
  readonly body: string;
  /**
   * The HTTP URL for this issue
   */
  readonly url: any;
}

export interface CreateIssue_createIssue {
  readonly __typename: "CreateIssuePayload";
  /**
   * The new issue.
   */
  readonly issue: CreateIssue_createIssue_issue | null;
}

export interface CreateIssue {
  /**
   * Creates a new issue.
   */
  readonly createIssue: CreateIssue_createIssue | null;
}

export interface CreateIssueVariables {
  readonly repositoryId: string;
  readonly title: string;
  readonly body: string;
}
