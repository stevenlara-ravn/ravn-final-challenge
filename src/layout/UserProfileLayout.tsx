import { Outlet } from "react-router";

export default function UserProfileLayout() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Outlet />
    </section>
  );
}
