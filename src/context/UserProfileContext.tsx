import { useProfileQuery, User } from "@/gql/graphql";
import { createContext, useMemo } from "react";

interface UserProfileContextType {
  profileData?: User;
}

export const UserProfileContext = createContext<UserProfileContextType>({
  profileData: undefined,
});

export const UserProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useProfileQuery();

  const contextValue = useMemo(
    () => ({
      profileData: data?.profile,
    }),
    [data],
  );

  return (
    <UserProfileContext.Provider value={contextValue}>
      {children}
    </UserProfileContext.Provider>
  );
};
