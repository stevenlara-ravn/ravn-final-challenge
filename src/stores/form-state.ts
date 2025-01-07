import { Task } from "@/gql/graphql";
import { create } from "zustand";

interface FormState {
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
  currentTask?: Task | undefined;
  setCurrentTask: (currentTask?: Task) => void;
  isDeleteTaskModalOpen: boolean;
  setIsDeleteTaskModalOpen: (isDeleteTaskModalOpen: boolean) => void;
}

export const useFormState = create<FormState>((set) => ({
  isFormOpen: false,
  currentTask: undefined,
  setIsFormOpen: (isFormOpen: boolean) => set({ isFormOpen }),
  setCurrentTask: (currentTask: Task | undefined) => set({ currentTask }),
  isDeleteTaskModalOpen: false,
  setIsDeleteTaskModalOpen: (isDeleteTaskModalOpen: boolean) =>
    set({ isDeleteTaskModalOpen }),
}));
