import EstimatePointsIcon from "@/assets/icons/estimate-points.svg?react";
import Combo from "@/components/core/design-system/Combo";
import ComboItem from "@/components/core/design-system/ComboItem";
import { FormPropsContext } from "@/context/FormPropsContext";
import { PointEstimate } from "@/gql/graphql";
import { mappedPointsEstimate } from "@/helpers/points-estimate";
import { TaskInputs } from "@/types/Task";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function EstimateCombo() {
  const { pointEstimateNumbers } = useContext(FormPropsContext);

  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const pointEstimate = watch("pointEstimate");

  return (
    <Combo
      className={clsx(errors.pointEstimate && "bg-ravn-primary-3")}
      onValueChange={(value) =>
        setValue("pointEstimate", value as PointEstimate, {
          shouldValidate: true,
        })
      }
      optionIcon={<EstimatePointsIcon />}
      placeholder="Estimate"
      value={pointEstimate}
    >
      <Select.Group>
        <Select.Label className="px-4 text-start text-ravn-neutral-2 text-body-xl-bold">
          Estimate
        </Select.Label>

        {pointEstimateNumbers
          .sort((a, b) => a - b)
          .map((point) => (
            <ComboItem
              key={point}
              selectIcon={<EstimatePointsIcon />}
              value={mappedPointsEstimate(point, "string") as PointEstimate}
            >
              {point} Points
            </ComboItem>
          ))}
      </Select.Group>
    </Combo>
  );
}
