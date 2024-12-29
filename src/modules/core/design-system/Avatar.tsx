import { ReactProps } from "@/types/ReactProps";

export default function Avatar(props: ReactProps) {
  return (
    <img
      alt="Avatar"
      className={`min-h-8 min-w-8 rounded-full ${props.className}`}
      src="https://i.pravatar.cc/32"
    />
  );
}
