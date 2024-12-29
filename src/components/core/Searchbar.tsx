import SearchIcon from "@/assets/icons/search-bar/search.svg?react";
import XCloseIcon from "@/assets/icons/x-close.svg?react";

export default function Searchbar() {
  return (
    <form className="relative flex h-full w-full items-center justify-between">
      <SearchIcon className="absolute left-6 h-6 w-6 text-ravn-neutral-2" />
      <input
        className="text-body-m h-full w-full rounded-2xl bg-ravn-neutral-4 py-5 pl-[72px] text-ravn-neutral-2 placeholder:text-ravn-neutral-2 focus:outline-none"
        placeholder="Search"
        type="search"
      />
      <button className="absolute right-6 h-6 w-6" type="reset">
        <XCloseIcon className="h-full w-full text-ravn-neutral-2" />
      </button>
    </form>
  );
}
