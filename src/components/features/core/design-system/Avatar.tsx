import ReactProps from "@/types/ReactProps";

interface AvatarProps extends ReactProps {
  url?: string;
}

export default function Avatar({
  url = "https://i.pravatar.cc/32",
  ...props
}: AvatarProps) {
  return (
    <img
      alt="Avatar"
      className={`min-h-8 min-w-8 rounded-full ${props.className}`}
      src={url}
    />
  );
}
