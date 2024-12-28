import CommentICon from "@/assets/icons/comment.svg?react";
import DragIcon from "@/assets/icons/drag-icon.svg?react";
import RightArrowIcon from "@/assets/icons/right-arrow.svg?react";
import SubtasksIcon from "@/assets/icons/subtasks.svg?react";
import Avatar from "@/core/design-system/Avatar";
import Tag from "@/core/design-system/Tag";

export default function TaskTableColumn() {
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <div className="relative flex h-full w-full min-w-[460px] items-center justify-between gap-2 overflow-hidden border-x border-b border-ravn-neutral-3 px-4 py-1">
        <span className="absolute left-0 h-[80%] w-1 bg-white"></span>
        <span className="flex h-6 w-6 items-center justify-center">
          <DragIcon></DragIcon>
        </span>
        <div className="flex w-full items-center justify-start gap-2">
          <span>01</span>
          <p className="text-body-m overflow-hidden text-ellipsis whitespace-nowrap font-normal">
            Create wireframe
          </p>
        </div>

        <div className="flex w-[142px] items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-1">
            <p className="text-body-m font-normal text-ravn-neutral-1">3</p>
            <CommentICon></CommentICon>
          </div>
          <div className="flex items-center justify-center gap-1">
            <p className="text-body-m font-normal text-ravn-neutral-1">5</p>
            <SubtasksIcon></SubtasksIcon>
          </div>

          <button className="flex items-center justify-center gap-1">
            <p className="text-body-m font-normal text-ravn-neutral-1">
              Details
            </p>
            <RightArrowIcon className=""></RightArrowIcon>
          </button>
        </div>
      </div>

      <div className="flex h-full w-full min-w-[168px] items-center justify-center overflow-hidden border-b border-r border-ravn-neutral-3 border-r-ravn-neutral-3 px-2 py-2">
        <div className="flex items-center justify-center gap-2">
          <Tag className="bg-ravn-secondary-4/10 text-ravn-secondary-4">
            ios app
          </Tag>
          <Tag className="w-[52px] bg-ravn-neutral-2/10">+2</Tag>
        </div>
      </div>

      <div className="flex h-full w-full min-w-[140px] items-center justify-start border-b border-r border-ravn-neutral-3 border-r-ravn-neutral-3 px-4 py-2">
        <p className="text-body-m font-normal">2 points</p>
      </div>

      <div className="flex h-full w-full min-w-[159px] items-center justify-start gap-2 border-b border-r border-ravn-neutral-3 border-r-ravn-neutral-3 px-2 py-3">
        <Avatar></Avatar>
        <p className="text-body-m overflow-hidden text-ellipsis whitespace-nowrap font-normal">
          Amelia Nellstrongers
        </p>
      </div>

      <div className="flex h-full w-full min-w-[141px] items-center justify-start border-b border-r border-ravn-neutral-3 px-4 py-1">
        <p className="text-body-m font-normal">6 July, 2020</p>
      </div>
    </div>
  );
}
