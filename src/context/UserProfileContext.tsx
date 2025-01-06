import { useProfileQuery, User } from "@/gql/graphql";
import { createContext, useMemo } from "react";

interface ExtendedUser extends User {
  avatar: string;
}

interface UserProfileContextType {
  profileData?: ExtendedUser;
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
      profileData: {
        ...(data?.profile || ({} as User)),
        avatar: "https://avatars.githubusercontent.com/u/188256588?v=4",
      },
    }),
    [data],
  );

  return (
    <UserProfileContext.Provider value={contextValue}>
      {children}
    </UserProfileContext.Provider>
  );
};
