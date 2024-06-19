"use client";

import { useContext, useEffect, useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";

import { getLocalStorage, isDuplicate, setLocalStorage } from "../../utils";
import { PlusIcon } from "../icons";
import Task from "../task";
import TaskModal from "../task-modal";
import { ModalContext } from "../../utils/context";

const ToDos = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { task, setTask, taskList, setTaskList } = useContext(ModalContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setTaskList(getLocalStorage("tasks", []));
  }, [task]);

  const onPressAction = () => {
    if (task === "") {
      setIsInvalid(true);
      setErrorMessage("This field cannot be empty");
    } else if (isDuplicate(taskList, task)) {
      setIsInvalid(true);
      setErrorMessage("This task already exists");
    } else {
      const updatedTasks = [...taskList, task];
      setTaskList(updatedTasks);
      setLocalStorage("tasks", updatedTasks);
      setTask("");
      onOpenChange(false);
    }
  };

  return (
    <>
      <div className="w-1/3 mx-auto my-32 border border-2 border-green-400 px-4 py-10 rounded">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl">
            To-<span>Dos</span>
          </h1>
          <Button
            // variant="ghost"
            color="success"
            startContent={<PlusIcon className={"w-4 h-4"} />}
            onPress={onOpen}
          >
            Add Task
          </Button>
        </div>

        <div className="mt-10">
          {taskList.length ? (
            taskList.map((task) => <Task key={task} singleTask={task} />)
          ) : (
            <p className="font-medium text-lg">
              Looks like you haven&apos;t listed your tasks yet. Get started by
              adding one, right away!
            </p>
          )}
        </div>
      </div>
      <TaskModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onPressAction={onPressAction}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default ToDos;
