"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { getLocalStorage, setLocalStorage } from "../utils";
import { PlusIcon } from "../components/icons";
import Task from "../components/task";
import TaskModal from "../components/task-modal";

const YourTodos = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const localStorageItem = getLocalStorage("tasks", []);
    setTaskList(getLocalStorage("tasks", []));
  }, [task]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isDuplicate = (newTask) => {
    const duplicate = taskList.find((item) => item === newTask);
    if (duplicate == undefined) {
      return false;
    } else return true;
  };

  const onPressAction = () => {
    if (task === "") {
      setIsInvalid(true);
      setErrorMessage("This field cannot be empty");
    } else if (isDuplicate(task)) {
      setIsInvalid(true);
      setErrorMessage("This task already exists");
    } else {
      const updatedTasks = [...taskList, task];
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
            taskList.map((task) => <Task key={task} task={task} />)
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
        taskList={taskList}
        onPressAction={onPressAction}
        task={task}
        setTask={setTask}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default YourTodos;
