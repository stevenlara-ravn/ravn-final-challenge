import TaskGridSkeleton from "@/components/core/TaskGridSkeleton";
import TaskCard from "@/components/features/task/TaskCard";
import TaskColumn from "@/components/features/task/TaskColumn";
import { FormPropsContext } from "@/context/FormPropsContext";
import { Status, Task } from "@/gql/graphql";
import useDraggableHandlers from "@/hooks/useDraggableHandlers";
import useFilteredTasks from "@/hooks/useFilteredTasks";
import { closestCorners, DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useContext } from "react";

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
  const { loading, groupedByStatus } = useFilteredTasks();
  const { statuses } = useContext(FormPropsContext);
  const { handleDragStart, handleDragEnd, activeTask } = useDraggableHandlers();

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
