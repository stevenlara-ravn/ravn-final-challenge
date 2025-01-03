import * as RCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Checkbox() {
  return (
    <RCheckbox.Root
      className="flex size-[18px] items-center justify-center rounded bg-white outline-none"
      defaultChecked
      id="c1"
    >
      <RCheckbox.Indicator>
        <CheckIcon />
      </RCheckbox.Indicator>
    </RCheckbox.Root>
  );
}
