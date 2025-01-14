export const TaskTablePlaceholder = () => {
  return (
    <tr className="flex h-[57px] w-full flex-col items-center justify-center gap-4 border border-t-0 border-ravn-neutral-3 bg-ravn-neutral-4 p-4">
      <td className="text-ravn-neutral-2 text-body-l-bold">
        No tasks available
      </td>
    </tr>
  );
};

export const TaskCardPlaceholder = () => {
  return (
    <div className="flex h-[208px] w-[348px] flex-col items-center justify-center gap-4 rounded-lg border border-ravn-neutral-3 bg-ravn-neutral-4 p-4">
      <p className="text-ravn-neutral-2 text-body-l-bold">No tasks available</p>
    </div>
  );
};
