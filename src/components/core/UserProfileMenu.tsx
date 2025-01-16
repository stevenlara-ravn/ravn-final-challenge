import Avatar from "@/components/core/design-system/Avatar";
import { UserProfileContext } from "@/context/UserProfileContext";
import * as Popover from "@radix-ui/react-popover";
import { useContext } from "react";
import { NavLink } from "react-router";

export default function UserProfileMenu() {
  const { profileData } = useContext(UserProfileContext);

  return (
    <Popover.Root>
      <Popover.Trigger className="h-auto w-10">
        <Avatar
          className="h-full w-full border border-ravn-neutral-4 hover:border-ravn-primary-4"
          url={profileData?.avatar}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="h-full w-full rounded-lg border border-ravn-neutral-2 bg-ravn-neutral-3 p-1 text-ravn-neutral-1">
          <ul className="flex flex-col items-start justify-center">
            <li className="cursor-pointer select-none rounded px-4 py-1 hover:bg-ravn-neutral-2">
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
