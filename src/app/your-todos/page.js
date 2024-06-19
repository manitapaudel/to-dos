"use client";

import { Button, Input, useDisclosure } from "@nextui-org/react";
import { useState } from "react";

import { PlusIcon } from "../components/icons";
import TaskList from "../components/task-list";
import TaskModal from "../components/task-modal";

const YourTodos = () => {
  const [showInput, setShowInput] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("The task is", task);
      setTask("");
    }
  };

  return (
    <>
      <div className="w-1/2 mx-auto my-32">
        <h1 className="font-medium">
          Looks like you don&apos;t have any to-dos yet.
        </h1>
        <Button
          className="w-full"
          variant="ghost"
          color="success"
          startContent={<PlusIcon className={"w-4 h-4"} />}
          onPress={onOpen}
        >
          Add Task
        </Button>

        <TaskList />
      </div>
      <TaskModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default YourTodos;
