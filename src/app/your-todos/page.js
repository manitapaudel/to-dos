"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

import { CloseIcon, PlusIcon } from "../components/icons";

const YourTodos = () => {
  const [task, setTask] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("The task is", task);
      setTask("");
    }
  };

  return (
    <div className="w-1/2 mx-auto my-32">
      <h1 className="font-medium">
        Looks like you don&apos;t have any to-dos yet.
      </h1>
      <Button
        className="w-full"
        variant="ghost"
        color="success"
        startContent={
          showInput ? <CloseIcon /> : <PlusIcon className={"w-4 h-4"} />
        }
        onClick={handleClick}
      >
        {showInput ? "Close" : "Add Task"}
      </Button>
      {showInput ? (
        <Input
          isRequired
          value={task}
          type="text"
          label="Task name"
          placeholder="Enter your task here"
          className={` mt-5`}
          color="success"
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyDown}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default YourTodos;
