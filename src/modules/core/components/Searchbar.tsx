import Search from "@/assets/icons/search-bar/search.svg?react";
import XClose from "@/assets/icons/x-close.svg?react";

export default function Searchbar() {
  return (
    <form className="relative flex h-full w-full items-center justify-between">
      <Search className="absolute left-6 h-6 w-6 text-ravn-neutral-2" />
      <input
        className="text-body-m h-full w-full rounded-2xl bg-ravn-neutral-4 py-5 pl-[72px] text-ravn-neutral-2 placeholder:text-ravn-neutral-2 focus:outline-none"
        type="search"
        placeholder="Search"
      />
      <button type="reset" className="absolute right-6 h-6 w-6">
        <XClose className="h-full w-full text-ravn-neutral-2" />
      </button>
    </form>
  );
}
