import EstimatePointsIcon from "@/assets/icons/estimate-points.svg?react";
import Combo from "@/components/features/core/design-system/Combo";
import ComboItem from "@/components/features/core/design-system/ComboItem";
import * as Select from "@radix-ui/react-select";

export default function EstimateCombo() {
  return (
    <Combo optionIcon={<EstimatePointsIcon />} placeholder="Estimate">
      <Select.Group>
        <Select.Label className="px-4 text-start text-ravn-neutral-2 text-body-xl-bold">
          Estimate
        </Select.Label>

        <ComboItem selectIcon={<EstimatePointsIcon />} value="0">
          0 Points
        </ComboItem>
        <ComboItem selectIcon={<EstimatePointsIcon />} value="1">
          1 Points
        </ComboItem>
        <ComboItem selectIcon={<EstimatePointsIcon />} value="2">
          2 Points
        </ComboItem>
        <ComboItem selectIcon={<EstimatePointsIcon />} value="4">
          4 Points
        </ComboItem>
        <ComboItem selectIcon={<EstimatePointsIcon />} value="8">
          8 Points
        </ComboItem>
      </Select.Group>
    </Combo>
  );
}
