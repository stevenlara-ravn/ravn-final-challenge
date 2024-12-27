import MasterSidebar from "@/core/components/MasterSidebar";
import Searchbar from "@/core/components/Searchbar";
import UserProfile from "@/core/components/UserProfile";
import TaskSectionList from "@/task/components/TaskSectionList";
import Topbar from "@/task/components/Topbar";

export default function AppLayout() {
  return (
    <main className="flex h-screen w-full items-center justify-between gap-8 bg-ravn-neutral-5 p-8">
      <MasterSidebar />

      <div className="flex h-full w-full flex-col items-center justify-center">
        <section className="flex h-full w-full max-w-[1108px] flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl">
          <div className="relative flex h-16 w-full items-center justify-between rounded-2xl bg-ravn-neutral-4">
            <Searchbar />
            <UserProfile />
          </div>

          <section className="flex h-full w-full flex-col items-center justify-center gap-4">
            <Topbar />

            {/* DINAMIC CONTENT */}
            <main className="h-full w-full">
              <TaskSectionList />
            </main>
          </section>
        </section>
      </div>
    </main>
  );
}
