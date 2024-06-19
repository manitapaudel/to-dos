"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

import { PlusIcon } from "../components/icons";

const YourTodos = () => {
  const [task, setTask] = useState("");
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="w-1/2 mx-auto my-32">
      <h1 className="font-medium">
        Looks like you don&apos;t have any to-dos yet.
      </h1>
      <Button
        variant="ghost"
        color="success"
        startContent={<PlusIcon className={"w-4 h-4"} />}
        onClick={() => setShowInput(true)}
      >
        Add Task
      </Button>
      {showInput ? (
        <Input
          isRequired
          value={task}
          type="text"
          label="Task name"
          placeholder="Enter your task here"
          className={`max-w-xs mt-5`}
          color="success"
          onChange={(e) => setTask(e.target.value)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default YourTodos;
