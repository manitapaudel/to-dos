import { Button, Card, CardBody, useDisclosure } from "@nextui-org/react";
import { CheckIcon, EditIcon } from "../icons";
import TaskModal from "../task-modal";

const Task = ({ task }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onPressAction = () => {};

  return (
    <Card className="mt-4">
      <CardBody>
        <div className="flex justify-between">
          <p>{task}</p>
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
        initialTaskState={task}
        onPressAction={onPressAction}
      />
    </Card>
  );
};

export default Task;
