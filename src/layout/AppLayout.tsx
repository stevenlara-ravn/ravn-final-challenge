import MasterSidebar from "@/components/core/MasterSidebar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <main className="flex h-screen w-full items-center justify-between gap-8 bg-ravn-neutral-5 p-8">
      <MasterSidebar />

      <Outlet />
    </main>
  );
}
