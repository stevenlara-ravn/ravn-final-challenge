import { PointEstimate } from "@/gql/graphql";

export const POINTS_ESTIMATE = {
  [PointEstimate.Eight]: 8,
  [PointEstimate.Four]: 4,
  [PointEstimate.One]: 1,
  [PointEstimate.Two]: 2,
  [PointEstimate.Zero]: 0,
} satisfies Record<PointEstimate, number>;
