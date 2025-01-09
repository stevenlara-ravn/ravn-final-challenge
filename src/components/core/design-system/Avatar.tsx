import ReactProps from "@/types/ReactProps";
import { cn } from "@/utils/cn";

interface AvatarProps extends ReactProps {
  url?: string | null;
}

export default function Avatar({ url, ...props }: AvatarProps) {
  return (
    <img
      alt="Avatar"
      className={cn("min-h-8 min-w-8 rounded-full", props.className)}
      src={url ?? "https://i.pravatar.cc/32"}
    />
  );
}
