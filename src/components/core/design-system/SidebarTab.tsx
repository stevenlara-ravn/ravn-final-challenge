import { cn } from "@/utils/cn";
import { NavLink } from "react-router";

interface SidebarTabProps {
  icon: React.ReactNode;
  label: string;
  url: string;
}

export default function SidebarTab({ icon, label, url }: SidebarTabProps) {
  return (
    <li className="h-max w-full">
      <NavLink
        className={({ isActive }: { isActive: boolean }) =>
          cn(
            "flex h-[56px] w-full items-center justify-start gap-4 pl-4 text-ravn-neutral-2 hover:text-ravn-primary-4",
            isActive &&
              "border-r-4 border-ravn-primary-4 bg-gradient-to-r from-[#BA252500] from-10% to-[#D24D4D1A] to-100% text-ravn-primary-4",
          )
        }
        to={url}
      >
        {icon}
        <p className="uppercase text-body-m-bold">{label}</p>
      </NavLink>
    </li>
  );
}
