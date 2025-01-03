import * as RCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Checkbox() {
  return (
    <RCheckbox.Root
      className="flex size-[18px] items-center justify-center border border-ravn-neutral-1 bg-transparent outline-none"
      id="c1"
    >
      <RCheckbox.Indicator className="text-green-400">
        <CheckIcon />
      </RCheckbox.Indicator>
    </RCheckbox.Root>
  );
}
