export type ViewMode = "grid" | "table";

export interface ToggleViewModeButtonProps {
  viewMode: "grid" | "table";
  onToggle: (viewMode: ViewMode) => void;
}
