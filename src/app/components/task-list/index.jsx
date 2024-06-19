import { Button, Card, CardBody } from "@nextui-org/react";
import { CheckIcon, EditIcon } from "../icons";

const TaskList = () => {
  return (
    <div className="mt-5">
      <Card>
        <CardBody>
          <div className="flex justify-between">
            <p>Make beautiful websites regardless of your design experience.</p>
            <span className="flex items-center gap-1.5">
              <Button
                isIconOnly
                color="success"
                className="w-8 h-8"
                aria-label="Done"
              >
                <CheckIcon />
              </Button>
              <Button
                isIconOnly
                color="warning"
                className="w-8 h-8"
                aria-label="Edit task"
              >
                <EditIcon />
              </Button>
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TaskList;
