import ReactProps from "@/types/ReactProps";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends ReactProps {
  type: ButtonType;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-lg ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
