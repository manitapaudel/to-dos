import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { setLocalStorage } from "../../utils";

const TaskModal = ({
  isOpen,
  onOpenChange,
  isEditForm = false,
  onPressAction,
  task,
  setTask,
  isInvalid,
  errorMessage,
}) => {
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
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage={errorMessage}
                onChange={(e) => setTask(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="success" onPress={onPressAction}>
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
