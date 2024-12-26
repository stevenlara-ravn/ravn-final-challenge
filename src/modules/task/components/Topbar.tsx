import CreateButton from "@/core/design-system/CreateButton";
import SwitchButton from "@/core/design-system/SwitchButton";

export default function Topbar() {
  return (
    <div className="flex h-12 w-full items-center justify-between">
      <SwitchButton />
      <CreateButton />
    </div>
  );
}
