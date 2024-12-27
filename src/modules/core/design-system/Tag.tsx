import React from "react";

export default function Tag(props: React.PropsWithChildren<any>) {
  return (
    <div
      className={`flex h-8 min-w-20 items-center justify-center rounded px-4 py-1 ${props.className}`}
    >
      <p className="text-body-m text-center font-semibold uppercase">
        {props.children}
      </p>
    </div>
  );
}
