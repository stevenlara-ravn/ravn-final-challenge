import RavnLogo from "@/assets/icons/logomark.svg?react";
import Button from "@/components/core/design-system/Button";
import Navigation from "@/components/core/Navigation";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function MasterSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <aside
        className={cn(
          "absolute z-[3] flex h-[95%] w-full max-w-[232px] flex-col items-center justify-start rounded-3xl bg-ravn-neutral-4 pt-3 shadow-2xl transition-all duration-500 md:relative md:h-full md:translate-x-0 md:shadow-none",
          isSidebarOpen && "y-10 -translate-x-72",
        )}
      >
        <RavnLogo />
        <Navigation />

        <Button
          className={cn(
            "absolute -right-20 top-80 z-[2] rounded-l-none border border-ravn-primary-4 bg-ravn-neutral-4 shadow-lg shadow-ravn-primary-4 transition-all duration-500 md:hidden",
            !isSidebarOpen && "-right-10",
          )}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          type="button"
        >
          <RavnLogo />
        </Button>
      </aside>
    </>
  );
}
