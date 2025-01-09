export default function UserProfileCardSkeleton() {
  return (
    <article className="flex h-[662px] w-[442px] max-w-lg animate-pulse flex-col items-center justify-between gap-8 overflow-hidden rounded-lg border border-ravn-neutral-2 bg-ravn-neutral-4 p-5">
      <div className="h-[400px] w-[400px] rounded-t-lg bg-ravn-neutral-2" />

      <div className="w-full px-5">
        <div className="mb-3 h-8 w-full bg-ravn-neutral-2" />
        <div className="mb-2 h-8 w-2/3 bg-ravn-neutral-2" />
        <div className="mb-2 h-8 w-[125.16px] rounded-lg bg-ravn-neutral-2 px-3" />
        <div className="mb-2 h-8 w-[215.52px] bg-ravn-neutral-2" />
      </div>
    </article>
  );
}
