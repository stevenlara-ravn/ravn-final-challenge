import RightArrowIcon from "@/assets/icons/arrow.svg?react";
import CommentIcon from "@/assets/icons/comment.svg?react";
import DragIcon from "@/assets/icons/drag-icon.svg?react";
import SubtasksIcon from "@/assets/icons/subtasks.svg?react";
import Avatar from "@/components/core/design-system/Avatar";
import TechTags from "@/components/core/TechTag";
import { statusColors } from "@/constants/colors";
import { POINTS_ESTIMATE } from "@/constants/points-estimate";
import { Task } from "@/gql/graphql";
import { cn } from "@/utils/cn";
import { zeroPad } from "@/utils/text-transform";

export default function TaskTableColumn({ task }: { task: Task }) {
  return (
    <tr className="flex h-full w-full items-center justify-between">
      <td className="group relative flex h-full w-full min-w-[460px] items-center justify-between gap-2 overflow-hidden border-x border-b border-ravn-neutral-3 px-4 py-1">
        <span
          className={cn(
            "absolute left-0 h-[80%] w-1",
            statusColors[task.status],
          )}
        />
        <span className="group/drag-n-drop flex h-6 w-6 cursor-move items-center justify-center">
          <DragIcon className="invisible text-ravn-neutral-2 group-hover/drag-n-drop:visible" />
        </span>
        <div className="flex w-full items-center justify-start gap-2">
          <span className="text-body-m-regular">{zeroPad(task.position)}</span>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-body-m-regular">
            {task.name}
          </p>
        </div>

        <div className="invisible flex w-[142px] items-center justify-center gap-2 group-hover:visible">
          <div className="flex items-center justify-center gap-1">
            <p className="text-ravn-neutral-1 text-body-m-regular">3</p>
            <CommentIcon />
          </div>
          <div className="flex items-center justify-center gap-1">
            <p className="text-ravn-neutral-1 text-body-m-regular">5</p>
            <SubtasksIcon />
          </div>

          <button
            className="flex items-center justify-center gap-1"
            type="button"
          >
            <p className="text-ravn-neutral-1 text-body-m-regular">Details</p>
            <RightArrowIcon className="text-ravn-neutral-1" />
          </button>
        </div>
      </td>

      <td className="flex h-full w-full min-w-[168px] items-center justify-center overflow-hidden border-b border-r border-ravn-neutral-3 border-r-ravn-neutral-3 px-2 py-1">
        <div className="flex w-full items-center justify-center gap-2">
          <TechTags tags={task.tags} />
        </div>
      </td>

      <td className="flex h-full w-full min-w-[140px] items-center justify-start border-b border-r border-ravn-neutral-3 border-r-ravn-neutral-3 px-4 py-2">
        <p className="text-body-m-regular">
          {POINTS_ESTIMATE[task.pointEstimate]} points
        </p>
      </td>

      <td className="flex h-full w-full min-w-[159px] items-center justify-start gap-2 border-b border-r border-ravn-neutral-3 border-r-ravn-neutral-3 px-2 py-3">
        <Avatar />
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-body-m-regular">
          {task.assignee?.fullName ?? "No Assignee"}
        </p>
      </td>

      <td className="flex h-full w-full min-w-[141px] items-center justify-start border-b border-r border-ravn-neutral-3 px-4 py-1">
        <p className="text-body-m-regular">6 July, 2020</p>
      </td>
    </tr>
  );
}
