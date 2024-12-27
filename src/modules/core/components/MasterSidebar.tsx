import RavnLogo from "@/assets/icons/logomark.svg?react";
import Navigation from "@/core/components/Navigation";

export default function MasterSidebar() {
  return (
    <aside className="flex h-full w-full max-w-[232px] flex-col items-center justify-start rounded-3xl bg-ravn-neutral-4 pt-3">
      <RavnLogo />
      <Navigation />
    </aside>
  );
}
