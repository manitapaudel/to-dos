import { useContext } from "react";
import { Button, Card, CardBody, useDisclosure } from "@nextui-org/react";

import { ModalContext } from "@/app/context/ModalContext";
import { isDuplicate, setLocalStorage } from "@/app/utils";
import { CheckIcon, EditIcon } from "@/app/components/icons";
import TaskModal from "@/app/components/task-modal";

const Task = ({ singleTask }) => {
  const { task, setTask, taskList, setTaskList } = useContext(ModalContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onPressAction = () => {
    if (task === "") {
      setIsInvalid(true);
      setErrorMessage("This field cannot be empty");
    } else if (isDuplicate(taskList, task)) {
      // To check for duplicates, since our tasks themselves are ids and supposed to be unique
      setIsInvalid(true);
      setErrorMessage("This task already exists");
    } else {
      const filteredTasks = taskList.filter((item) => item !== singleTask);
      const updatedTasks = [...filteredTasks, task];
      setTaskList(updatedTasks);
      setLocalStorage("tasks", updatedTasks);
      setTask("");
      onOpenChange(false);
    }
  };

  const handleDelete = () => {
    const filteredTasks = taskList.filter((item) => item !== singleTask);
    setTaskList(filteredTasks);
    setLocalStorage("tasks", filteredTasks);
  };

  return (
    <Card className="mt-4">
      <CardBody>
        <div className="flex justify-between">
          <p>{singleTask}</p>
          <span className="flex items-center gap-1.5">
            <Button
              isIconOnly
              color="success"
              className="w-6 h-7"
              aria-label="Done Task"
              onClick={handleDelete}
            >
              <CheckIcon />
            </Button>
            <Button
              isIconOnly
              color="warning"
              className="w-6 h-7"
              aria-label="Edit task"
              onPress={onOpen}
            >
              <EditIcon />
            </Button>
          </span>
        </div>
      </CardBody>
      <TaskModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isEditForm
        initialTaskState={singleTask}
        onPressAction={onPressAction}
      />
    </Card>
  );
};

export default Task;
