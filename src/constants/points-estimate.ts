import { PointEstimate } from "@/gql/graphql";

export const POINTS_ESTIMATE = {
  EIGHT: 8,
  FOUR: 4,
  ONE: 1,
  TWO: 2,
  ZERO: 0,
} satisfies Record<PointEstimate, number>;
