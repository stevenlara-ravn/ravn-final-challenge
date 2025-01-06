import { useFormState } from "@/stores/form-state";
import { TaskInputs } from "@/types/Task";
import DOMPurify from "dompurify";
import { useFormContext } from "react-hook-form";

export default function TaskTitle() {
  const { currentTask } = useFormState((state) => state);

  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const name = watch("name", currentTask?.name);

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedNote = DOMPurify.sanitize(e.target.value);
    setValue("name", sanitizedNote, { shouldValidate: true });
  };

  return (
    <div className="flex w-full flex-col items-start justify-between">
      <input
        autoFocus={false}
        className="h-8 w-full bg-ravn-neutral-3 outline-none text-body-xl-bold placeholder:text-ravn-neutral-2"
        onChange={handleOnChangeInput}
        placeholder="Task Title"
        type="text"
        value={name}
      />
      {errors.name && <p className="text-red-300">{errors.name.message}</p>}
    </div>
  );
}
