import { Task } from "@/gql/graphql";
import { create } from "zustand";

interface FormState {
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
  taskEditing?: Task;
  setCurrentTask: (taskEditing: Task) => void;
}

export const useFormState = create<FormState>((set) => ({
  isFormOpen: false,
  taskEditing: undefined,
  setIsFormOpen: (isFormOpen: boolean) => set({ isFormOpen }),
  setCurrentTask: (taskEditing: Task) => set({ taskEditing }),
}));
