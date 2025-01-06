import ArrowIcon from "@/assets/icons/arrow.svg?react";
import CalendarIcon from "@/assets/icons/calendar.svg?react";
import { useFormState } from "@/stores/form-state";
import "@/styles/due-date-picker.css";
import { TaskInputs } from "@/types/Task";
import { cn } from "@/utils/cn";
import DatePicker from "react-datepicker";
import { useFormContext } from "react-hook-form";

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: CustomHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b border-ravn-neutral-2 px-4 py-2">
      <button
        disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
        type="button"
      >
        <ArrowIcon className="h-[11.84px] w-[7.44px] rotate-180" />
      </button>

      <span className="text-ravn-neutral-1 text-body-s-bold">
        {date.toLocaleString("default", { month: "long", year: "numeric" })}
      </span>
      <button
        disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
        type="button"
      >
        <ArrowIcon className="h-[11.84px] w-[7.44px]" />
      </button>
    </div>
  );
};

export default function DueDatePicker() {
  const { currentTask } = useFormState((state) => state);

  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();

  const dueDate = watch("dueDate", currentTask?.dueDate);

  return (
    <DatePicker
      className={cn(
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
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <CustomHeader
          date={date}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
          nextMonthButtonDisabled={nextMonthButtonDisabled}
          prevMonthButtonDisabled={prevMonthButtonDisabled}
        />
      )}
      selected={dueDate ? new Date(dueDate) : new Date()}
      showIcon={true}
      todayButton="Today"
    />
  );
}
