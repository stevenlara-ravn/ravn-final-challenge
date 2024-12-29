import MasterSidebar from "@/components/core/MasterSidebar";
import Searchbar from "@/components/core/Searchbar";
import UserProfile from "@/components/core/UserProfile";
import Topbar from "@/components/task/Topbar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <main className="flex h-screen w-full items-center justify-between gap-8 bg-ravn-neutral-5 p-8">
      <MasterSidebar />

      <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <section className="flex h-full w-full max-w-[1108px] flex-col items-center justify-between gap-8 overflow-hidden">
          <div className="relative flex h-16 w-full items-center justify-between rounded-2xl bg-ravn-neutral-4">
            <Searchbar />
            <UserProfile />
          </div>

          <section className="flex h-full w-full flex-col items-center justify-center gap-4">
            <Topbar />

            <main className="h-full w-full">
              <Outlet />
            </main>
          </section>
        </section>
      </div>
    </main>
  );
}
