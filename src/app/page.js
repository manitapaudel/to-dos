"use client";

import { useEffect, useState } from "react";

import { getLocalStorage } from "../../src/app/utils";
import { ModalContext } from "../../src/app/utils/context";
import ToDos from "../../src/app/components/todos";

const YourTodos = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    setTaskList(getLocalStorage("tasks", []));
  }, [task]);

  return (
    <ModalContext.Provider value={{ task, setTask, taskList, setTaskList }}>
      <ToDos />
    </ModalContext.Provider>
  );
};

export default YourTodos;
