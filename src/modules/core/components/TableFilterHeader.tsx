export default function TableFilterHeader() {
  return (
    <header className="flex h-14 w-full items-center justify-between rounded border-y border-ravn-neutral-3 bg-ravn-neutral-4 text-ravn-neutral-1">
      <div className="flex h-full w-full min-w-[460px] items-center justify-start rounded-bl rounded-tl border-x border-ravn-neutral-3 px-4 py-1">
        <p className="text-body-m font-normal"># Task Name</p>
      </div>
      <div className="flex h-full w-full min-w-[168px] items-center justify-start border-r border-r-ravn-neutral-3 px-4 py-1">
        <p className="text-body-m font-normal">Task Tags</p>
      </div>
      <div className="flex h-full w-full min-w-[140px] items-center justify-start border-r border-r-ravn-neutral-3 px-4 py-1">
        <p className="text-body-m font-normal">Estimate</p>
      </div>
      <div className="flex h-full w-full min-w-[159px] items-center justify-start border-r border-r-ravn-neutral-3 px-4 py-1">
        <p className="text-body-m font-normal">Task Assign Name</p>
      </div>
      <div className="flex h-full w-full min-w-[141px] items-center justify-start rounded border-r border-ravn-neutral-3 px-4 py-1">
        <p className="text-body-m font-normal">Due Date</p>
      </div>
    </header>
  );
}
