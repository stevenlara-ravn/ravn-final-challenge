import RavnLogo from "@/assets/icons/logomark.svg?react";
import ColumnsIcon from "@/assets/icons/master-sidebar/columns.svg?react";
import GridIcon from "@/assets/icons/master-sidebar/grid.svg?react";
import SidebarTab from "@/core/design-system/SidebarTab";

const routes = [
  { icon: <GridIcon />, label: "Dashboard" },
  { icon: <ColumnsIcon />, label: "Tasks" },
];

export default function MasterSidebar() {
  return (
    <aside className="flex h-full w-[232px] flex-col items-center justify-start rounded-3xl bg-ravn-neutral-4 pt-3">
      <RavnLogo />

      <nav className="mt-[60px] flex w-full flex-col">
        <ul className="flex flex-col items-center justify-center gap-4">
          {routes.map((route) => (
            <SidebarTab key={route.label} {...route} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
