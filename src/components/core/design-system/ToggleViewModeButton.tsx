import ColumnsIcon from "@/assets/icons/master-sidebar/columns.svg?react";
import GridIcon from "@/assets/icons/master-sidebar/grid.svg?react";
import Button from "@/components/core/design-system/Button";
import { ToggleViewModeButtonProps } from "@/types/ViewModeTypes";
import { cn } from "@/utils/cn";

export default function ToggleViewModeButton({
  viewMode,
  onToggle,
}: ToggleViewModeButtonProps) {
  return (
    <div className="flex h-10 w-20 items-center justify-center">
      <Button
        className={cn(viewMode === "table" && "border border-ravn-primary-4")}
        onClick={() => onToggle("table")}
        type="button"
      >
        <ColumnsIcon
          className={cn(
            "text-ravn-neutral-1",
            viewMode === "table" && "text-ravn-primary-4",
          )}
        />
      </Button>

      <Button
        className={cn(viewMode === "grid" && "border border-ravn-primary-4")}
        onClick={() => onToggle("grid")}
        type="button"
      >
        <GridIcon
          className={cn(
            "text-ravn-neutral-1",
            viewMode === "grid" && "text-ravn-primary-4",
          )}
        />
      </Button>
    </div>
  );
}
