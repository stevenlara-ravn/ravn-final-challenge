import { cn } from "@/utils/cn";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

type ToasterType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToasterType;
}

const toasterColors = {
  success: {
    background: "bg-ravn-secondary-5",
    border: "border-ravn-secondary-4",
    icon: "text-ravn-secondary-4",
    text: "text-ravn-secondary-1",
  },
  error: {
    background: "bg-ravn-primary-5",
    border: "border-ravn-primary-4",
    icon: "text-ravn-primary-4",
    text: "text-ravn-primary-1",
  },
};

const icons = {
  success: (
    <CheckCircledIcon
      className={cn("h-5 w-5 text-black", toasterColors.success.icon)}
    />
  ),
  error: (
    <CrossCircledIcon
      className={cn("h-5 w-5 text-black", toasterColors.error.icon)}
    />
  ),
};

const Toast = ({ message, type }: ToastProps) => {
  return (
    <div
      className={cn(
        "flex h-[53.5px] w-[356px] items-center justify-start gap-3 rounded border p-4",
        toasterColors[type].background,
        toasterColors[type].border,
      )}
    >
      {icons[type]}
      <p
        className={cn(
          "text-black text-body-m-regular",
          toasterColors[type].text,
        )}
      >
        {message}
      </p>
    </div>
  );
};

export const successToast = (message: string) => {
  toast.custom(() => <Toast message={message} type="success" />);
};

export const errorToast = (message: string) => {
  toast.custom(() => <Toast message={message} type="error" />);
};
