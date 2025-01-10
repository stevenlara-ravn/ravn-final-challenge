import Avatar from "@/components/core/design-system/Avatar";
import { UserProfileContext } from "@/context/UserProfileContext";
import { cn } from "@/utils/cn";
import { useContext } from "react";
import { NavLink } from "react-router";

export default function UserProfileLink() {
  const { profileData } = useContext(UserProfileContext);

  return (
    <div className="flex w-full items-center justify-center gap-2 p-3">
      <NavLink
        className={({ isActive }) =>
          cn(
            "relative flex w-full items-center justify-between rounded-xl bg-ravn-neutral-3 p-1 pr-2",
            isActive &&
              "border border-ravn-primary-4 bg-gradient-to-r from-ravn-primary-4/5 from-10% to-ravn-primary-4/15 to-100% text-ravn-primary-4",
          )
        }
        to="/profile"
      >
        <Avatar className="h-16 w-16 rounded-lg" url={profileData?.avatar} />

        <p className="text-ravn-neutral-1 text-body-m-regular">
          {profileData?.fullName}
        </p>
      </NavLink>
    </div>
  );
}
