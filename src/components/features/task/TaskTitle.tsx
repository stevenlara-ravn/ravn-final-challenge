import { useFormState } from "@/stores/form-state";
import { TaskInputs } from "@/types/Task";
import { useFormContext } from "react-hook-form";

export default function TaskTitle() {
  const { currentTask } = useFormState((state) => state);

  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const name = watch("name", currentTask?.name);

  return (
    <div className="flex w-full flex-col items-start justify-between">
      <input
        autoFocus={false}
        className="h-8 w-full bg-ravn-neutral-3 outline-none text-body-xl-bold placeholder:text-ravn-neutral-2"
        onChange={(e) =>
          setValue("name", e.target.value, { shouldValidate: true })
        }
        placeholder="Task Title"
        type="text"
        value={name}
      />
      {errors.name && <p className="text-red-300">{errors.name.message}</p>}
    </div>
  );
}
