import SearchIcon from "@/assets/icons/search-bar/search.svg?react";
import XCloseIcon from "@/assets/icons/x-close.svg?react";
import { useTaskSearchState } from "@/stores/task-search-state";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Searchbar() {
  const { setSearchTerm } = useTaskSearchState();
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(localSearchTerm, 500);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);

    return () => {
      setSearchTerm("");
    };
  }, [debouncedSearchTerm, setSearchTerm]);

  const handleReset = () => {
    setLocalSearchTerm("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  return (
    <div className="relative flex h-full w-full items-center justify-between">
      <SearchIcon className="absolute left-6 h-6 w-6 text-ravn-neutral-2" />

      <input
        className="h-full w-full rounded-2xl bg-ravn-neutral-4 py-5 pl-[72px] pr-7 text-ravn-neutral-2 text-body-m-regular placeholder:text-ravn-neutral-2 focus:outline-none"
        onChange={handleOnChange}
        placeholder="Search"
        type="search"
        value={localSearchTerm}
      />

      {localSearchTerm.length >= 1 && (
        <button
          className="absolute right-6 h-6 w-6"
          onClick={handleReset}
          type="reset"
        >
          <XCloseIcon className="h-full w-full text-ravn-neutral-2" />
        </button>
      )}
    </div>
  );
}
