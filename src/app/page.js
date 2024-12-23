"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getLocalStorage } from "@/app/utils";
import { ModalContext } from "@/app/context/ModalContext";
import ToDos from "@/app/components/todos";

export const initialTaskStateGenerator = () => ({
  name: "",
  id: typeof window !== "undefined" ? crypto.randomUUID() : "",
  isCompleted: false,
});

const YourTodos = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState(initialTaskStateGenerator());
  const router = useRouter();

  useEffect(() => {
    const userInfo = getLocalStorage("todoUserInfo", null);
    if (userInfo === null) {
      router.push("/auth/login");
    } else {
    }
  }, [router]);

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
