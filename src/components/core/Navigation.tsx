import ColumnsIcon from "@/assets/icons/master-sidebar/columns.svg?react";
import GridIcon from "@/assets/icons/master-sidebar/grid.svg?react";
import SidebarTab from "@/components/core/design-system/SidebarTab";

const routes = [
  { icon: <GridIcon />, label: "Dashboard", url: "/" },
  { icon: <ColumnsIcon />, label: "My Tasks", url: "/my-tasks" },
];

export default function Navigation() {
  return (
    <nav className="mt-[60px] flex w-full flex-col">
      <ul className="flex flex-col items-center justify-center gap-4">
        {routes.map((route) => (
          <SidebarTab
            icon={route.icon}
            key={route.label}
            label={route.label}
            url={route.url}
          />
        ))}
      </ul>
    </nav>
  );
}
