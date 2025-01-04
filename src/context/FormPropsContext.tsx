import { PointEstimate, TaskTag, useGetUsersQuery, User } from "@/gql/graphql";
import { mappedPointsEstimate } from "@/helpers/points-estimate";
import { createContext, useMemo } from "react";

interface FormPropsContextType {
  users?: User[];
  pointEstimate: PointEstimate[];
  pointEstimateNumbers: number[];
  tags: TaskTag[];
}

export const FormPropsContext = createContext<FormPropsContextType>({
  pointEstimate: [],
  pointEstimateNumbers: [],
  tags: [],
  users: [],
});

export const FormPropsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useGetUsersQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const contextValue = useMemo(() => {
    return {
      users: data?.users,
      pointEstimate: Object.values(PointEstimate),
      pointEstimateNumbers: Object.values(PointEstimate)
        .map((point) => mappedPointsEstimate(point, "number"))
        .filter((value): value is number => typeof value === "number"),
      tags: Object.values(TaskTag),
    };
  }, [data]);

  return (
    <FormPropsContext.Provider value={contextValue}>
      {children}
    </FormPropsContext.Provider>
  );
};
