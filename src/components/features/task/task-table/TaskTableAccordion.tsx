import DownArrowIcon from "@/assets/icons/down-arrow.svg?react";
import MoreIcon from "@/assets/icons/more.svg?react";
import PlusSign from "@/assets/icons/plus-sign.svg?react";
import TaskTableColumn from "@/components/features/task/task-table/TaskTableColumn";
import { Status, Task } from "@/gql/graphql";
import { normalizeText, zeroPad } from "@/utils/text-transform";
import {
  Disclosure as Accordion,
  DisclosureButton as AccordionButton,
  DisclosurePanel as AccordionPanel,
} from "@headlessui/react";
import clsx from "clsx";

interface TaskTableAccordionProps {
  status: Status;
  tasks: Task[];
}

export default function TaskTableAccordion({
  status,
  tasks,
}: TaskTableAccordionProps) {
  return (
    <Accordion defaultOpen>
      {({ open }) => (
        <>
          <div className="group sticky top-0 z-[1] flex h-14 w-full items-center justify-between gap-10 rounded-t border border-ravn-neutral-3 bg-ravn-neutral-4 px-4 py-1">
            <AccordionButton className="flex w-full min-w-[200px] items-center justify-start gap-3 py-2">
              <DownArrowIcon
                className={clsx(
                  "h-[6px] w-3 text-ravn-neutral-2",
                  open && "rotate-180",
                )}
              />
              <p className="font-semibold capitalize text-ravn-neutral-1 text-body-l-bold">
                {normalizeText(status)}
                <span className="text-ravn-ravn-bg-ravn-neutral-2 pl-2">
                  ({zeroPad(tasks?.length ?? 0)})
                </span>
              </p>
            </AccordionButton>

            <div className="invisible flex h-6 w-14 items-center justify-center gap-2 group-hover:visible">
              <button className="h-6 w-6" type="button">
                <PlusSign className="h-[14px] w-[14px] text-ravn-neutral-2" />
              </button>
              <button className="h-6 w-6" type="button">
                <MoreIcon className="h-1 w-[18px] text-ravn-neutral-2" />
              </button>
            </div>
          </div>

          <AccordionPanel className="-mt-4 flex h-max min-h-14 w-full flex-col items-center justify-center overflow-hidden bg-ravn-neutral-4 text-ravn-neutral-1">
            <table className="flex h-full w-full flex-col items-start justify-start overflow-x-auto">
              <tbody className="flex min-h-14 w-full flex-col items-center justify-between">
                {tasks?.map((task: Task) => (
                  <TaskTableColumn key={task.id} task={task} />
                ))}
              </tbody>
            </table>
          </AccordionPanel>
        </>
      )}
    </Accordion>
  );
}
