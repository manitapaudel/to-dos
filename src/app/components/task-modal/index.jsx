import { useContext, useState } from "react";
import {
  Calendar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";

import { ModalContext } from "@/app/context/ModalContext";
import { CalendarIcon } from "@/app/components/icons";

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
  const [date, setDate] = useState(parseDate("2024-10-25"));

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
              <h1>{isEditForm ? "Edit your Task" : "Create a New Task"}</h1>
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
                defaultValue=""
                value={date}
                type="text"
                label="Due Date"
                placeholder="MM/DD/YYYY"
                endContent={<CalendarIcon className="w-4 h-4 text-primary" />}
                className="mt-5 border border-accentDark rounded-xl"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "primary"}
                variant="bordered"
                errorMessage={errorMessage}
                onChange={(e) => setTask(e.target.value)}
              />
              <h2 className="font-semibold text-baseDark mt-2">
                Please pick a due date
              </h2>
              <Calendar
                aria-label="Date (Controlled)"
                value={date}
                onChange={setDate}
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
