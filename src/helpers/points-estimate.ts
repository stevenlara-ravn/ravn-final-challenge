import { POINTS_ESTIMATE } from "@/constants/points-estimate";
import { PointEstimate } from "@/gql/graphql";

/**
 * Maps a points estimate to a number or string, based on the returnType parameter
 *
 * @param estimate PointEstimate | number
 * @param returnType "number" | "string"
 * @returns number | string
 */
export const mappedPointsEstimate = (
  estimate: PointEstimate | number,
  returnType: "number" | "string",
): number | PointEstimate => {
  if (returnType === "number" && typeof estimate === "string") {
    return POINTS_ESTIMATE[estimate];
  } else if (returnType === "string" && typeof estimate === "number") {
    return Object.keys(POINTS_ESTIMATE).find(
      (key) => POINTS_ESTIMATE[key as PointEstimate] === estimate,
    ) as PointEstimate;
  }

  throw new Error("Invalid estimate or return type");
};
