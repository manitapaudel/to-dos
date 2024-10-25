"use client";

import { useContext, useEffect, useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";

import { ModalContext } from "@/app/context/ModalContext";
import { getLocalStorage, isDuplicate, setLocalStorage } from "@/app/utils";
import { PlusIcon } from "@/app/components/icons";
import Task from "@/app/components/task";
import TaskModal from "@/app/components/task-modal";

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
    <div className="px-5">
      <div className="sm:w-2/3 lg:w-1/2 mx-auto my-32 border border-2 border-green-400 px-4 py-10 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-3xl">
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

        <div className="mt-10">
          {taskList.length ? (
            taskList.map((task) => <Task key={task} singleTask={task} />)
          ) : (
            <>
              <h2 className="font-medium text-2xl">
                Hey there! <span className="bg-green-300">Welcome.</span>
              </h2>
              <p className="text-lg mt-5">
                Looks like you haven&apos;t listed your{" "}
                <span className="bg-green-300">tasks</span> yet. Get started by
                <span className="bg-green-300"> adding</span> one, right away!
              </p>
            </>
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
    </div>
  );
};

export default ToDos;
