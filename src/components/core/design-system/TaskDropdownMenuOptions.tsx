import MoreIcon from "@/assets/icons/more.svg?react";
import EditIcon from "@/assets/icons/pencil.svg?react";
import DeleteIcon from "@/assets/icons/trash.svg?react";
import { Task } from "@/gql/graphql";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";

interface TaskDropDownMenuOptionsProps {
  task: Task;
  setCurrentTask: (task: Task) => void;
  setIsFormOpen: (isFormOpen: boolean) => void;
  setIsDeleteTaskModalOpen: (isDeleteTaskModalOpen: boolean) => void;
}

export default function TaskDropDownMenuOptions({
  task,
  setCurrentTask,
  setIsFormOpen,
  setIsDeleteTaskModalOpen,
}: TaskDropDownMenuOptionsProps) {
  return (
    <Menu>
      <MenuButton as={Fragment}>
        <button
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg hover:bg-ravn-neutral-3"
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          type="button"
        >
          <MoreIcon className="text-ravn-neutral-2" />
        </button>
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="h-[88px] w-[138px] origin-top-right rounded-lg border border-ravn-neutral-2 bg-ravn-neutral-3 p-2 text-ravn-neutral-1 transition duration-100 ease-out text-body-m-regular focus:outline-none"
        transition
      >
        <MenuItem>
          <button
            className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentTask(task);
              setIsFormOpen(true);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            type="button"
          >
            <EditIcon />
            Edit
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentTask(task);
              setIsDeleteTaskModalOpen(true);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            type="button"
          >
            <DeleteIcon />
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
