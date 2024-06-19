import { useContext } from "react";
import { Button, Card, CardBody, useDisclosure } from "@nextui-org/react";

import { CheckIcon, EditIcon } from "../icons";
import TaskModal from "../task-modal";
import { ModalContext } from "../../utils/context";
import { isDuplicate, setLocalStorage } from "../../utils";

const Task = ({ singleTask }) => {
  const { task, setTask, taskList } = useContext(ModalContext);
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
      setLocalStorage("tasks", updatedTasks);
      setTask("");
      onOpenChange(false);
    }
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
