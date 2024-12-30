import { ReactProps } from "@/types/ReactProps";

export default function Avatar(
  {
    url = "https://i.pravatar.cc/32",
    ...props
  }:
    ReactProps & { url?: string }
) {
  return (
    <img
      alt="Avatar"
      className={`min-h-8 min-w-8 rounded-full ${props.className}`}
      src={url}
    />
  );
}
