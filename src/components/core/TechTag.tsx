import Tag from "@/components/core/design-system/Tag";
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
  if (!tags.length) return null;

  const [firstTag, ...restTags] = tags;

  return (
    <>
      <TechTagItem className={deviceTagColors[firstTag]} content={firstTag} />
      {restTags.length > 0 && (
        <TechTagItem
          className="bg-ravn-neutral-2/10"
          content={`+${restTags.length}`}
        />
      )}
    </>
  );
}
