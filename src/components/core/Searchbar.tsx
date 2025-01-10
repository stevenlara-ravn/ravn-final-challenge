import SearchIcon from "@/assets/icons/search-bar/search.svg?react";
import XCloseIcon from "@/assets/icons/x-close.svg?react";
import { useTaskSearchState } from "@/stores/task-search-state";
import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Searchbar() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showIcon, setShowIcon] = useState(false);

  const { setSearchTerm } = useTaskSearchState();

  const debouncedSearchTerm = useCallback(
    debounce((text: string) => {
      setSearchTerm(text);
    }, 500),
    [],
  );

  useEffect(() => {
    return () => {
      debouncedSearchTerm.cancel();
    };
  }, [debouncedSearchTerm]);

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setShowIcon(false);
    debouncedSearchTerm.cancel();
    setSearchTerm("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShowIcon(value.length > 0);
    debouncedSearchTerm(value);
  };

  return (
    <div className="relative z-0 flex h-full w-full items-center justify-between">
      <SearchIcon className="absolute left-6 h-6 w-6 text-ravn-neutral-2" />

      <input
        className="h-full w-full rounded-2xl bg-ravn-neutral-4 py-5 pl-[72px] pr-7 text-ravn-neutral-2 text-body-m-regular placeholder:text-ravn-neutral-2 focus:outline-none"
        onChange={handleOnChange}
        placeholder="Search"
        ref={inputRef}
        type="search"
      />

      {showIcon && (
        <button
          className="absolute right-6 h-6 w-6"
          onClick={handleReset}
          type="button"
        >
          <XCloseIcon className="h-full w-full text-ravn-neutral-2" />
        </button>
      )}
    </div>
  );
}
