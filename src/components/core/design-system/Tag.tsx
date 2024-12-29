import { deviceTagColors } from "@/constants/tag-colors";
import { TagProps } from "@/types/Tag";
import { normalizeText } from "@/utils/text-transform";

export default function Tag({ label }: TagProps) {
  return (
    <div
      className={`overflox-hidden flex h-8 min-w-12 items-center justify-center rounded px-4 py-1 ${deviceTagColors[label]}`}
    >
      <p className="text-body-m text-center font-semibold uppercase">{normalizeText(label)}</p>
    </div>
  );
}
