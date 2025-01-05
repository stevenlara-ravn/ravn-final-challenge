import Tag from "@/components/features/core/design-system/Tag";
import { deviceTagColors } from "@/constants/colors";
import { TaskTag } from "@/gql/graphql";
import ReactProps from "@/types/ReactProps";
import { normalizeText } from "@/utils/text-transform";

interface TechTagProps extends ReactProps {
  tags: TaskTag[];
}

function TechTagItem({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <Tag className={className}>
      <p className="text-center uppercase text-body-m-bold">
        {normalizeText(content)}
      </p>
    </Tag>
  );
}

export default function TechTag({ tags }: TechTagProps) {
  if (!tags || tags.length === 0) return null;

  return tags.length === 1 ? (
    <TechTagItem className={deviceTagColors[tags[0]]} content={tags[0]} />
  ) : (
    <>
      <TechTagItem className={deviceTagColors[tags[0]]} content={tags[0]} />
      <TechTagItem
        className="bg-ravn-neutral-2/10"
        content={`+${tags.length - 1}`}
      />
    </>
  );
}
