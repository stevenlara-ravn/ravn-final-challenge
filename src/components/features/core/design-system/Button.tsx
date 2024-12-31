import ReactProps from "@/types/ReactProps";

export default function Button(props: ReactProps) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-lg ${props.className}`}
      type="button"
    >
      {props.children}
    </button>
  );
}
