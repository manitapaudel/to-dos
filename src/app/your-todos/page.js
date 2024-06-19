"use client";

import { useEffect, useState } from "react";

import { getLocalStorage } from "../utils";
import { ModalContext } from "../utils/context";
import ToDos from "../components/todos";

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
