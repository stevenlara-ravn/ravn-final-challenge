import Searchbar from "@/components/core/Searchbar";
import UserProfile from "@/components/core/UserProfileSection";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-full w-full max-w-[1108px] flex-col items-center justify-between gap-8 overflow-hidden">
        <div className="relative flex h-16 w-full items-center justify-between rounded-2xl bg-ravn-neutral-4">
          <Searchbar />
          <UserProfile />
        </div>

        <Outlet />
      </section>
    </div>
  );
}
