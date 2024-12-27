import React from "react";

export default function Button(props: React.PropsWithChildren<any>) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-lg ${props.className}`}
    >
      {props.children}
    </button>
  );
}
