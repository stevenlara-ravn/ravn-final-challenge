import PlusSign from "@/assets/icons/plus-sign.svg?react";
import Button from "@/core/design-system/Button";

export default function CreateButton() {
  return (
    <Button className="bg-ravn-primary-4">
      <PlusSign className="h-[14px] w-[14px] text-ravn-neutral-1" />
    </Button>
  );
}
