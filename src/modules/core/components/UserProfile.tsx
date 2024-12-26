import Bell from "@/assets/icons/user-profile/bell.svg?react";

export default function UserProfile() {
  return (
    <div className="mr-6 flex h-10 w-[88px] items-center justify-between gap-6">
      <Bell className="text-ravn-neutral-2" />
      <div className="h-10 w-10 rounded-full bg-blue-200"></div>
    </div>
  );
}
