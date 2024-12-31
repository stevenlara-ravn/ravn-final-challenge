import Tag from "@/components/features/core/design-system/Tag";
import { deviceTagColors } from "@/constants/tag-colors";
import { TechTagProps } from "@/types/Tag";
import { normalizeText } from "@/utils/text-transform";

export default function TechTag(props: TechTagProps) {
  return (
    <Tag className={`${deviceTagColors[props.label]} ${props.className}`}>
      <p className="text-center uppercase text-body-m-bold">
        {normalizeText(props.label)}
      </p>
    </Tag>
  );
}
