import { Task } from "@/gql/graphql";
import useUpdateTask from "@/hooks/api/task-actions/useUpdateTask";
import useFilteredTasks from "@/hooks/useFilteredTasks";
import { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useState } from "react";

export default function useDraggableHandlers() {
  const { groupedByStatus } = useFilteredTasks();
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const { updateTask } = useUpdateTask(() => setActiveTask(null));

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const task = Object.values(groupedByStatus)
      .flat()
      .find((task) => task.id === active.id);
    console.log(task);

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

  return { handleDragStart, handleDragEnd, activeTask };
}
