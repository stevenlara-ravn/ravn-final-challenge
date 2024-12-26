import { SidebarTabProps } from "@/core/types/MasterSidebar";

export default function SidebarTab({ icon, label }: SidebarTabProps) {
  return (
    <li className="flex h-[56px] w-full items-center justify-start gap-4 border-r-4 border-ravn-primary-4 from-[#BA252500] from-10% to-[#D24D4D1A] to-100% pl-4 text-ravn-neutral-2 hover:text-ravn-primary-4 focus:bg-gradient-to-r">
      {icon}
      <p className="text-body-m font-semibold uppercase">{label}</p>
    </li>
  );
}
