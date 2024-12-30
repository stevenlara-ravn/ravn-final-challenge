import DownArrowIcon from "@/assets/icons/down-arrow.svg?react";
import MoreIcon from "@/assets/icons/more.svg?react";
import PlusSign from "@/assets/icons/plus-sign.svg?react";
import TaskTableColumn from "@/components/task/task-table/TaskTableColumn";
import { Status, useGetTasksQuery } from "@/gql/graphql";
import { normalizeText, zeroPad } from "@/utils/text-transform";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function TaskTable({ status }: { status: Status }) {
  const { data } = useGetTasksQuery({
    variables: { input: { status } },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  return (
    <Disclosure defaultOpen>
      <div className="flex w-full items-center justify-between gap-10 rounded-t border border-ravn-neutral-3 bg-ravn-neutral-4 px-4 py-1 h-14 group">
        <DisclosureButton className="flex w-full min-w-[200px] items-center justify-start gap-3 py-2">
          <DownArrowIcon className="h-[6px] w-3 text-ravn-neutral-2" />
          <p className="text-body-l-bold font-semibold text-ravn-neutral-1 capitalize">
            {normalizeText(status)}
            <span className="text-ravn-ravn-bg-ravn-neutral-2 pl-2">({zeroPad(data?.tasks?.length ?? 0)})</span>
          </p>
        </DisclosureButton>

        <div className="invisible flex h-6 w-14 items-center justify-center gap-2 group-hover:visible">
          <button className="h-6 w-6">
            <PlusSign className="h-[14px] w-[14px] text-ravn-neutral-2" />
          </button>
          <button className="h-6 w-6">
            <MoreIcon className="h-1 w-[18px] text-ravn-neutral-2" />
          </button>
        </div>
      </div>

      <DisclosurePanel className="-mt-4 flex w-full flex-col items-center justify-center bg-ravn-neutral-4 text-ravn-neutral-1 min-h-14">
        {
          data?.tasks?.map((task) => (
            <TaskTableColumn key={task.id} task={task} />
          ))
        }
      </DisclosurePanel>
    </Disclosure>
  );
}
