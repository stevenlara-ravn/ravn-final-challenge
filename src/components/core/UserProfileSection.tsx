import BellIcon from "@/assets/icons/user-profile/bell.svg?react";
import UserProfileMenu from "@/components/core/UserProfileMenu";

export default function UserProfileSection() {
  return (
    <div className="mr-6 flex h-10 min-w-[88px] items-center justify-between">
      <span className="relative h-6 w-6">
        <span className="absolute right-1 inline-flex h-2 w-2 animate-ping rounded-full bg-ravn-primary-3 opacity-75" />
        <span className="absolute right-1 inline-flex h-2 w-2 rounded-full bg-ravn-primary-3" />
        <BellIcon className="h-full text-ravn-neutral-2" />
      </span>
      <UserProfileMenu />
    </div>
  );
}
