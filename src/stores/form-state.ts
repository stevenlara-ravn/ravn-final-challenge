import { Task } from "@/gql/graphql";
import { create } from "zustand";

interface FormState {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  currentTask?: Task | undefined;
  setCurrentTask: (currentTask?: Task) => void;
  isDeleteTaskModalOpen: boolean;
  setIsDeleteTaskModalOpen: (isDeleteTaskModalOpen: boolean) => void;
}

export const useFormState = create<FormState>((set) => ({
  isDialogOpen: false,
  currentTask: undefined,
  setIsDialogOpen: (isDialogOpen: boolean) => set({ isDialogOpen }),
  setCurrentTask: (currentTask: Task | undefined) => set({ currentTask }),
  isDeleteTaskModalOpen: false,
  setIsDeleteTaskModalOpen: (isDeleteTaskModalOpen: boolean) =>
    set({ isDeleteTaskModalOpen }),
}));
