import {
  PointEstimate,
  Status,
  TaskTag,
  useGetUsersQuery,
  User,
} from "@/gql/graphql";
import { mappedPointsEstimate } from "@/helpers/points-estimate";
import { createContext, useMemo } from "react";

interface FormPropsContextType {
  users?: User[];
  pointEstimate: PointEstimate[];
  pointEstimateNumbers: number[];
  tags: TaskTag[];
  statuses: Status[];
}

export const FormPropsContext = createContext<FormPropsContextType>({
  pointEstimate: [],
  pointEstimateNumbers: [],
  tags: [],
  users: [],
  statuses: [],
});

export const FormPropsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useGetUsersQuery();

  const contextValue = useMemo(() => {
    return {
      users:
        data?.users.map((user) =>
          user.id === "913c8486-2fc1-43be-89fe-041f2c1b8af3"
            ? {
                ...user,
                avatar: "https://avatars.githubusercontent.com/u/188256588?v=4",
              }
            : user,
        ) ?? [],
      pointEstimate: Object.values(PointEstimate),
      pointEstimateNumbers: Object.values(PointEstimate)
        .map((point) => mappedPointsEstimate(point, "number"))
        .filter((value): value is number => typeof value === "number"),
      tags: Object.values(TaskTag),
      statuses: Object.values(Status),
    } satisfies FormPropsContextType;
  }, [data]);

  return (
    <FormPropsContext.Provider value={contextValue}>
      {children}
    </FormPropsContext.Provider>
  );
};
