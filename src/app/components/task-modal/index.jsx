import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";

const TaskModal = ({
  isOpen,
  onOpenChange,
  initialTaskState = "",
  isEditForm = false,
}) => {
  const [task, setTask] = useState(initialTaskState);

  const handleSaveTask = () => {
    console.log("Task added!", task);
    setTask("");
    onOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {isEditForm ? "Edit your Task" : "Create a New Task"}
            </ModalHeader>
            <ModalBody>
              <Input
                isRequired
                value={task}
                type="text"
                label="Task name"
                placeholder="Enter your task here"
                className={`mt-5`}
                color="success"
                onChange={(e) => setTask(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="success" onPress={handleSaveTask}>
                {isEditForm ? "Update" : "Add"} Task
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
