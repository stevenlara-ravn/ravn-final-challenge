import DownArrowIcon from "@/assets/icons/down-arrow.svg?react";
import MoreIcon from "@/assets/icons/more.svg?react";
import PlusSign from "@/assets/icons/plus-sign.svg?react";
import TaskTableColumn from "@/task/components/task-table/TaskTableColumn";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function TaskTable() {
  return (
    <Disclosure
      as="div"
      className="-4 flex h-14 w-full flex-col items-center justify-start rounded-t"
    >
      <div className="flex w-full items-center justify-between gap-10 rounded-t border border-ravn-neutral-3 bg-ravn-neutral-4 px-4 py-1">
        <DisclosureButton className="flex w-full min-w-[200px] items-center justify-start gap-3 py-2">
          <DownArrowIcon className="h-[6px] w-3 text-ravn-neutral-2" />
          <p className="text-body-l font-semibold text-ravn-neutral-1">
            To Do
            <span className="text-ravn-ravn-bg-ravn-neutral-2 pl-2">(05)</span>
          </p>
        </DisclosureButton>

        <div className="flex h-6 w-14 items-center justify-center gap-2">
          <button className="h-6 w-6">
            <PlusSign className="h-[14px] w-[14px] text-ravn-neutral-2" />
          </button>
          <button className="h-6 w-6">
            <MoreIcon className="h-1 w-[18px] text-ravn-neutral-2" />
          </button>
        </div>
      </div>

      <DisclosurePanel className="flex h-full w-full flex-col items-center justify-center bg-ravn-neutral-4 text-ravn-neutral-1">
        <TaskTableColumn />
      </DisclosurePanel>
    </Disclosure>
  );
}
