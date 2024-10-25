import { useContext, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";

import { ModalContext } from "@/app/context/ModalContext";
import { CalendarIcon, CheckIcon } from "@/app/components/icons";

const TaskModal = ({
  isOpen,
  onOpenChange,
  isEditForm = false,
  onPressAction,
  isInvalid,
  errorMessage,
  initialTaskState,
}) => {
  const { task, setTask } = useContext(ModalContext);
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      className="font-inconsolata"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between text-baseDark bg-baseDark bg-opacity-10">
              <p>{isEditForm ? "Edit your Task" : "Create a New Task"}</p>
            </ModalHeader>
            <ModalBody className="bg-baseDark bg-opacity-10">
              <Input
                isRequired
                defaultValue={initialTaskState || ""}
                value={task}
                type="text"
                label="Task name"
                placeholder="Enter your task here"
                className="mt-5 border border-accentDark rounded-xl"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "primary"}
                variant="bordered"
                errorMessage={errorMessage}
                onChange={(e) => setTask(e.target.value)}
              />
              <Input
                isRequired
                defaultValue={initialTaskState || ""}
                value={task}
                type="text"
                label="Created Date"
                placeholder="MM/DD/YYYY"
                endContent={
                  <button
                    className="focus:outline-none bg-red w-5 h-5 text-primary"
                    type="button"
                    onClick={toggleCalendar}
                  >
                    <CalendarIcon />
                  </button>
                }
                className="mt-5 border border-accentDark rounded-xl"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "primary"}
                variant="bordered"
                errorMessage={errorMessage}
                onChange={(e) => setTask(e.target.value)}
              />
            </ModalBody>
            <ModalFooter className="bg-baseDark bg-opacity-10">
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
                className="font-semibold"
              >
                Close
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="bordered"
                onPress={onPressAction}
              >
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
