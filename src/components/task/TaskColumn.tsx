import TaskCard from "@/components/task/TaskCard";
import { InputMaybe, Status, useGetTasksQuery } from "@/gql/graphql";
import { normalizeText, zeroPad } from "@/utils/text-transform";

export default function TaskColumn({ status }: { status: InputMaybe<Status> }) {
  const { data } = useGetTasksQuery({
    variables: { input: { status } },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  return (
    <section className="flex h-full w-full min-w-[348px] flex-col items-center justify-start gap-4 overflow-hidden rounded-lg">
      <p className="h-8 w-full capitalize text-ravn-neutral-1 text-body-l-bold">
        {normalizeText(status as string)} ({zeroPad(data?.tasks.length ?? 0)})
      </p>

      <div className="flex w-full flex-col items-center justify-start gap-4 overflow-y-auto pb-4">
        {data?.tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </section>
  );
}
