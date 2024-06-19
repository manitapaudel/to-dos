import { Button } from "@nextui-org/react";

import { PlusIcon } from "../components/icons";

const YourTodos = () => {
  return (
    <div className="w-1/2 mx-auto my-32">
      Looks like you don&apos;t have any to-dos yet.
      <Button
        variant="ghost"
        color="success"
        startContent={<PlusIcon className={"w-4 h-4"} />}
      >
        Create One!
      </Button>
    </div>
  );
};

export default YourTodos;
