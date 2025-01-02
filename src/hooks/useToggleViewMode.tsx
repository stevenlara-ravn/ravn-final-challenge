import { ViewMode } from "@/types/ViewModeTypes";
import { useSearchParams } from "react-router";

export default function useToggleViewMode(defaultViewMode = "grid") {
  const [searchParams, setSearchParams] = useSearchParams();
  const viewMode = (searchParams.get("view") as ViewMode) || defaultViewMode;

  const handleToggle = (viewMode: string) => {
    setSearchParams({ view: viewMode });
  };

  return { viewMode, handleToggle };
}
