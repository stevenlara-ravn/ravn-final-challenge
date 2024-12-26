import ColumnsIcon from "@/assets/icons/master-sidebar/columns.svg?react";
import GridIcon from "@/assets/icons/master-sidebar/grid.svg?react";
import Button from "@/core/design-system/Button";

export default function SwitchButton() {
  return (
    <div className="flex h-10 w-20 items-center justify-center">
      <Button>
        <ColumnsIcon className="h-[18px] w-[18px] text-ravn-neutral-1" />
      </Button>
      <Button className="border border-ravn-primary-4">
        <GridIcon className="h-[18px] w-[18px] text-ravn-primary-4" />
      </Button>
    </div>
  );
}
