"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";

import { ModalContext } from "@/app/context/ModalContext";
import { getLocalStorage, isDuplicate, setLocalStorage } from "@/app/utils";
import { PlusIcon } from "@/app/components/icons";
import Task from "@/app/components/task";
import TaskModal from "@/app/components/task-modal";
import { initialTaskStateGenerator } from "@/app/page";

const ToDos = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { task, setTask, taskList, setTaskList } = useContext(ModalContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setTaskList(getLocalStorage("tasks", []));
  }, [task]);

  const onPressAction = () => {
    if (task.name === "") {
      setIsInvalid(true);
      setErrorMessage("This field cannot be empty");
    } else {
      const updatedTasks = [...taskList, task];
      setTaskList(updatedTasks);
      setLocalStorage("tasks", updatedTasks);
      setTask(initialTaskStateGenerator());
      onOpenChange(false);
    }
  };

  return (
    <div className="text-baseDark font-inconsolata px-5">
      <div className="bg-baseDark bg-opacity-5 sm:w-2/3 lg:w-1/2 mx-auto my-8 500:my-28 border-2 border-accentDark px-4 py-10 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="font-caveat font-semibold text-primary text-3xl">
            To-<span>Dos</span>
          </h1>
          <Button
            variant="ghost"
            color="primary"
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
            <div className="flex flex-col md:flex-row items-center gap-2 xl:gap-10">
              <div className="relative shrink-0 w-64 h-64">
                <Image
                  src="/images/multitasking.svg"
                  alt="A woman multitasking"
                  fill
                />
              </div>
              <div className="">
                <h2 className="font-medium text-2xl">Hey there!</h2>
                <p className="text-lg mt-5">
                  Looks like you have a lot of{" "}
                  <span className="bg-primary bg-opacity-40">tasks</span> at
                  hand. Start by&nbsp;
                  <span className="bg-primary bg-opacity-40">adding</span> one,
                  right away!
                </p>
              </div>
            </div>
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
