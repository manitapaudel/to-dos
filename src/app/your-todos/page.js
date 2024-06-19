"use client";

import { useEffect, useState } from "react";

import { getLocalStorage } from "../utils";
import ToDos from "../components/ToDos";

const YourTodos = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    setTaskList(getLocalStorage("tasks", []));
  }, [task]);

  return <ToDos />;
};

export default YourTodos;
