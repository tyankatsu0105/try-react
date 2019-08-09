import { MutationTuple } from '@apollo/react-hooks';

import {
  CreateIssue,
  CreateIssueVariables,
} from '@api/graphql/queries/pages/Api/components/__generated__/CreateIssue';
import {
  AddStar,
  AddStarVariables,
} from '@api/graphql/queries/pages/Api/components/__generated__/AddStar';
import {
  RemoveStar,
  RemoveStarVariables,
} from '@api/graphql/queries/pages/Api/components/__generated__/RemoveStar';

export type CreateIssueFunction = MutationTuple<
  CreateIssue,
  CreateIssueVariables
>[0];

export type AddStarFunction = MutationTuple<AddStar, AddStarVariables>[0];

export type RemoveStarFunction = MutationTuple<
  RemoveStar,
  RemoveStarVariables
>[0];
