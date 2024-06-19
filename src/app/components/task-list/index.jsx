import { Button, Card, CardBody, useDisclosure } from "@nextui-org/react";
import { CheckIcon, EditIcon } from "../icons";
import TaskModal from "../task-modal";

const TaskList = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="mt-10">
        <Card>
          <CardBody>
            <div className="flex justify-between">
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
              <span className="flex items-center gap-1.5">
                <Button
                  isIconOnly
                  color="success"
                  className="w-8 h-8"
                  aria-label="Done Task"
                >
                  <CheckIcon />
                </Button>
                <Button
                  isIconOnly
                  color="warning"
                  className="w-8 h-8"
                  aria-label="Edit task"
                  onPress={onOpen}
                >
                  <EditIcon />
                </Button>
              </span>
            </div>
          </CardBody>
        </Card>
      </div>
      <TaskModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isEditForm
        initialTaskState="Go play games"
      />
    </>
  );
};

export default TaskList;
