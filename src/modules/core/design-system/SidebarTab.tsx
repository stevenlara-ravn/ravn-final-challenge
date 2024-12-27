import { SidebarTabProps } from "@/core/types/MasterSidebar";

export default function SidebarTab({ icon, label }: SidebarTabProps) {
  return (
    <li className="flex h-[56px] w-full items-center justify-start gap-4 from-[#BA252500] from-10% to-[#D24D4D1A] to-100% pl-4 text-ravn-neutral-2 first:border-r-4 first:border-ravn-primary-4 first:bg-gradient-to-r hover:text-ravn-primary-4">
      {icon}
      <p className="text-body-m font-semibold uppercase">{label}</p>
    </li>
  );
}
