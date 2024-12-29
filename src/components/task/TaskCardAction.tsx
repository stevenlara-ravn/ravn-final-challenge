import ClipIcon from "@/assets/icons/clip.svg?react";
import CommentIcon from "@/assets/icons/comment.svg?react";
import SubtasksIcon from "@/assets/icons/subtasks.svg?react";

export default function TaskCardAction() {
  return (
    <section className="flex h-6 min-w-[106px] items-center justify-between">
      <button className="h-6 w-[29px]">
        <ClipIcon />
      </button>
      <div className="flex h-6 min-w-[29px] items-center justify-center gap-1">
        <p className="text-body-m font-normal">3</p>
        <SubtasksIcon />
      </div>
      <div className="flex h-6 min-w-[29px] items-center justify-center gap-1">
        <p className="text-body-m font-normal">3</p>
        <CommentIcon />
      </div>
    </section>
  );
}
