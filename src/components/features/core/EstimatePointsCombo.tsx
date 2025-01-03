import EstimatePointsIcon from "@/assets/icons/estimate-points.svg?react";
import Combo from "@/components/features/core/design-system/Combo";
import ComboItem from "@/components/features/core/design-system/ComboItem";
import { PointEstimate } from "@/gql/graphql";
import { TaskInputs } from "@/types/Task";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function EstimateCombo() {
  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const pointEstimate = watch("pointEstimate");
  console.log(errors);

  return (
    <div className="flex flex-col items-center justify-between">
      <Combo
        className={clsx(errors.pointEstimate && "bg-ravn-primary-3")}
        onValueChange={(value) =>
          setValue("pointEstimate", value as PointEstimate)
        }
        optionIcon={<EstimatePointsIcon />}
        placeholder="Estimate"
        value={pointEstimate}
      >
        <Select.Group>
          <Select.Label className="px-4 text-start text-ravn-neutral-2 text-body-xl-bold">
            Estimate
          </Select.Label>

          <ComboItem selectIcon={<EstimatePointsIcon />} value="ZER">
            0 Points
          </ComboItem>
          <ComboItem selectIcon={<EstimatePointsIcon />} value="ONE">
            1 Points
          </ComboItem>
          <ComboItem selectIcon={<EstimatePointsIcon />} value="TWO">
            2 Points
          </ComboItem>
          <ComboItem selectIcon={<EstimatePointsIcon />} value="FOUR">
            4 Points
          </ComboItem>
          <ComboItem selectIcon={<EstimatePointsIcon />} value="EIGHT">
            8 Points
          </ComboItem>
        </Select.Group>
      </Combo>
    </div>
  );
}
