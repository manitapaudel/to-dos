import { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  useDisclosure,
} from "@nextui-org/react";

import { ModalContext } from "@/app/context/ModalContext";
import { isDuplicate, setLocalStorage } from "@/app/utils";
import { EditIcon, TrashIcon } from "@/app/components/icons";
import TaskModal from "@/app/components/task-modal";
import { initialTaskState } from "@/app/page";

const Task = ({ singleTask }) => {
  const { task, setTask, taskList, setTaskList } = useContext(ModalContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onPressAction = () => {
    if (task.name === "") {
      setIsInvalid(true);
      setErrorMessage("This field cannot be empty");
    } else {
      const filteredTasks = taskList.filter((item) => item !== singleTask);
      const updatedTasks = [...filteredTasks, task];
      setTaskList(updatedTasks);
      setLocalStorage("tasks", updatedTasks);
      setTask(initialTaskState);
      onOpenChange(false);
    }
  };

  const handleDelete = () => {
    const filteredTasks = taskList.filter((item) => item !== singleTask);
    setTaskList(filteredTasks);
    setLocalStorage("tasks", filteredTasks);
  };

  return (
    <Card className="mt-4 bg-baseDark bg-opacity-15 border px-3">
      <CardBody>
        <div className="">
          <div className="flex items-start gap-2">
            <Checkbox size="md" className="p-0 top-3" title="Mark as done" />
            <p className="text-lg font-medium">{singleTask.name}</p>
          </div>
          <div className="flex justify-between mt-3">
            <span className="flex items-center gap-1.5">
              <Button
                isIconOnly
                className="bg-accentLight border border-accentDark text-white w-6 h-7"
                aria-label="Delete Task"
                onClick={handleDelete}
                title="Delete the task"
              >
                <TrashIcon />
              </Button>
              <Button
                isIconOnly
                className="bg-primary border border-accentDark text-white w-6 h-7"
                aria-label="Edit Task"
                onPress={onOpen}
                title="Edit the task"
              >
                <EditIcon />
              </Button>
            </span>
            <span className="text-sm text-primary font-bold">10/25/2024</span>
          </div>
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
