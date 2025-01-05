import ReactProps from "@/types/ReactProps";

interface AvatarProps extends ReactProps {
  url?: string | null;
}

export default function Avatar({ url, ...props }: AvatarProps) {
  return (
    <img
      alt="Avatar"
      className={`min-h-8 min-w-8 rounded-full ${props.className}`}
      src={url ?? "https://i.pravatar.cc/32"}
    />
  );
}
