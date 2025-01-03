import CalendarIcon from "@/assets/icons/calendar.svg?react";
import { TaskInputs } from "@/types/Task";
import clsx from "clsx";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormContext } from "react-hook-form";

export default function DueDate() {
  const {
    formState: { errors },
  } = useFormContext<TaskInputs>();

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString(),
  );

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
            setSelectedDate(date.toISOString());
          }
        }}
        selected={selectedDate ? new Date(selectedDate) : null}
        showIcon={true}
      />
    </div>
  );
}
