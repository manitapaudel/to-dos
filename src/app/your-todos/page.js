"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";

import { PlusIcon } from "../components/icons";
import TaskList from "../components/task-list";
import TaskModal from "../components/task-modal";

const YourTodos = () => {
  const [showInput, setShowInput] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-1/3 mx-auto my-32">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">
            To-<span>Dos</span>
          </h1>
          <Button
            variant="ghost"
            color="success"
            startContent={<PlusIcon className={"w-4 h-4"} />}
            onPress={onOpen}
          >
            Add Task
          </Button>
        </div>

        <TaskList />
      </div>
      <TaskModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default YourTodos;
