import TaskGridSkeleton from "@/components/core/TaskGridSkeleton";
import TaskCard from "@/components/features/task/TaskCard";
import TaskColumn from "@/components/features/task/TaskColumn";
import { FormPropsContext } from "@/context/FormPropsContext";
import { Status, Task } from "@/gql/graphql";
import useUpdateTask from "@/hooks/api/task-actions/useUpdateTask";
import useFilteredTasks from "@/hooks/useFilteredTasks";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useContext, useState } from "react";

interface RenderTaskColumnsProps {
  statuses: Status[];
  groupedByStatus: Record<Status, Task[]>;
}

const RenderTaskColumns = ({
  statuses,
  groupedByStatus,
}: RenderTaskColumnsProps) => {
  return (
    statuses.length > 0 &&
    groupedByStatus &&
    statuses.map((status) => (
      <SortableContext
        items={
          groupedByStatus[status]
            ? groupedByStatus[status].map((task) => task.id)
            : []
        }
        key={status}
      >
        <TaskColumn
          key={status}
          status={status}
          tasks={groupedByStatus[status] ? groupedByStatus[status] : []}
        />
      </SortableContext>
    ))
  );
};

export default function TaskGrid() {
  const { groupedByStatus, loading } = useFilteredTasks();
  const { statuses } = useContext(FormPropsContext);

  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const { updateTask } = useUpdateTask(() => setActiveTask(null));

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const task = Object.values(groupedByStatus)
      .flat()
      .find((task) => task.id === active.id);

    setActiveTask(task || null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);
    console.log(active, over);

    if (!over || active.id === over.id) return;

    const activeTask = Object.values(groupedByStatus)
      .flat()
      .find((task) => task.id === active.id);

    if (!activeTask) return;

    const overTask = Object.values(groupedByStatus)
      .flat()
      .find((task) => task.id === over.id);

    const newStatus =
      over.data.current?.status || overTask?.status || activeTask.status;
    const newPosition = overTask
      ? overTask.position
      : groupedByStatus[newStatus]
        ? groupedByStatus[newStatus].length
        : 1;

    await updateTask(activeTask.id, {
      name: activeTask.name,
      dueDate: activeTask.dueDate,
      pointEstimate: activeTask.pointEstimate,
      tags: activeTask.tags,
      assigneeId: activeTask.assignee?.id,
      status: newStatus,
      position: newPosition,
    });

    console.log(
      `Task ${activeTask.name} moved from ${activeTask.status} at position ${activeTask.position} to ${newStatus} at position ${newPosition}`,
    );
  };

  return (
    <main className="flex h-full w-full items-start justify-start gap-8 overflow-x-auto no-scrollbar">
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        {loading ? (
          <TaskGridSkeleton />
        ) : (
          <RenderTaskColumns
            groupedByStatus={groupedByStatus}
            statuses={statuses}
          />
        )}

        <DragOverlay
          className="pointer-events-none z-[1000]"
          dropAnimation={{
            duration: 500,
            easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
          }}
        >
          {activeTask ? <TaskCard task={activeTask} /> : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}
