import CalendarIcon from "@/assets/icons/calendar.svg?react";
import { TaskInputs } from "@/types/Task";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";

export default function DueDatePicker() {
  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();

  const dueDate = watch("dueDate");

  return (
    <div className="flex flex-col items-center justify-between">
      <DatePicker
        className={clsx(
          "h-8 max-w-[139px] bg-ravn-neutral-2/10 text-center outline-none text-body-m-bold",
          errors.dueDate && "bg-ravn-primary-3",
        )}
        dateFormat="MMM. dd yyyy"
        icon={<CalendarIcon />}
        onChange={(date) => {
          if (date) {
            setValue("dueDate", date.toISOString(), { shouldValidate: true });
          }
        }}
        selected={dueDate ? new Date(dueDate) : new Date()}
        showIcon={true}
      />
    </div>
  );
}
