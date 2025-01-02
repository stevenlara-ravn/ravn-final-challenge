import SearchIcon from "@/assets/icons/search-bar/search.svg?react";
import XCloseIcon from "@/assets/icons/x-close.svg?react";
import { useState } from "react";

export default function Searchbar() {
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
  };

  return (
    <div
      className="relative flex h-full w-full items-center justify-between"
      onSubmit={(e) => e.preventDefault()}
    >
      <SearchIcon className="absolute left-6 h-6 w-6 text-ravn-neutral-2" />

      <input
        className="h-full w-full rounded-2xl bg-ravn-neutral-4 py-5 pl-[72px] pr-7 text-ravn-neutral-2 text-body-m-regular placeholder:text-ravn-neutral-2 focus:outline-none"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
        type="search"
        value={inputValue}
      />

      {inputValue.length >= 1 && (
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
