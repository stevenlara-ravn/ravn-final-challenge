import NotFoundIllustration from "@/assets/icons/http-errors/404.svg?react";
import { cn } from "@/utils/cn";
import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-20 bg-ravn-neutral-5">
      <NotFoundIllustration className="mx-auto h-[600px] w-[600px] text-ravn-neutral-5" />

      <NavLink className={cn("w-60 rounded")} to="/">
        <p className="border-b border-ravn-neutral-1 text-center text-ravn-neutral-1 text-body-xl-bold hover:text-ravn-neutral-2">
          Go to Dashboard
        </p>
      </NavLink>
    </main>
  );
}
