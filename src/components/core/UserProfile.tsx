import BellIcon from "@/assets/icons/user-profile/bell.svg?react";
import Avatar from "@/components/core/design-system/Avatar";

export default function UserProfile() {
  return (
    <div className="mr-6 flex h-10 w-[95px] items-center justify-between gap-6">
      <BellIcon className="text-ravn-neutral-2" />
      <Avatar className="h-10 w-10" />
    </div>
  );
}
