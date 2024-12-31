import PlusSignIcon from "@/assets/icons/plus-sign.svg?react";
import Button from "@/components/features/core/design-system/Button";

export default function CreateButton() {
  return (
    <Button className="bg-ravn-primary-4">
      <PlusSignIcon className="h-[14px] w-[14px] text-ravn-neutral-1" />
    </Button>
  );
}
