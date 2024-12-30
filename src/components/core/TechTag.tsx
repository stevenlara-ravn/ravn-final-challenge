import Tag from "@/components/core/design-system/Tag";
import { deviceTagColors } from "@/constants/tag-colors";
import { TechTagProps } from "@/types/Tag";
import { normalizeText } from "@/utils/text-transform";

export default function TechTag(props: TechTagProps) {
  return (
    <Tag className={`${deviceTagColors[props.label]} ${props.className}`} >
      <p className="text-body-m-bold text-center uppercase">{normalizeText(props.label)}</p>
    </Tag>
  );
}