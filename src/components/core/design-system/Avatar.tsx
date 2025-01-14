import ReactProps from "@/types/ReactProps";
import { cn } from "@/utils/cn";

interface AvatarProps extends ReactProps {
  url?: string | null;
}

export default function Avatar({ url, className }: AvatarProps) {
  return (
    <img
      alt="Avatar"
      className={cn("aspect-square min-h-8 min-w-8 rounded-full", className)}
      src={url ?? "https://i.pravatar.cc/32"}
    />
  );
}
