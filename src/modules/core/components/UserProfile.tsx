import Bell from "@/assets/icons/user-profile/bell.svg?react";
import Avatar from "@/core/design-system/Avatar";

export default function UserProfile() {
  return (
    <div className="mr-6 flex h-10 w-[95px] items-center justify-between gap-6">
      <Bell className="text-ravn-neutral-2" />
      <Avatar className="h-10 w-10"></Avatar>
    </div>
  );
}
