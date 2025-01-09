import { useProfileQuery, User } from "@/gql/graphql";
import { createContext, useMemo } from "react";

export interface ExtendedUser extends User {
  avatar: string;
}

interface UserProfileContextType {
  profileData?: ExtendedUser;
  loading: boolean;
}

export const UserProfileContext = createContext<UserProfileContextType>({
  profileData: undefined,
  loading: false,
});

export const UserProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, loading } = useProfileQuery();

  const contextValue = useMemo(
    () =>
      ({
        profileData: {
          ...(data?.profile || ({} as User)),
          avatar: "https://avatars.githubusercontent.com/u/188256588?v=4",
        },
        loading,
      }) satisfies UserProfileContextType,
    [data, loading],
  );

  return (
    <UserProfileContext.Provider value={contextValue}>
      {children}
    </UserProfileContext.Provider>
  );
};
