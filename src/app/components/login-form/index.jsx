import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

import { submitLogin } from "@/app/api/login";
import { setLocalStorage } from "@/app/utils";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/app/components/icons";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  // View/Hide Password
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateFields = () => {
    const errorsCopy = {};
    errorsCopy.name = formValues.email ? "" : "Password is required.";
    errorsCopy.email = /\S+@\S+\.\S+/.test(formValues.email)
      ? ""
      : "Email is not valid.";
    errorsCopy.password = formValues.password ? "" : "Password is required.";
    setErrorMessages(errorsCopy);
    return Object.values(errorsCopy).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields()) {
      const response = await submitLogin(formValues);
      console.log(response.message);
      console.log({ formValues });
      if (response.status === 200) {
        setLocalStorage("todoUserInfo", { email: formValues.email });
        router.push("/");
      } else console.log(response.message);
    }
  };

  return (
    <form className="flex flex-col gap-6">
      <Input
        isRequired
        name="email"
        value={formValues.email}
        type="email"
        label="Email"
        color={"success"}
        size="lg"
        variant="bordered"
        placeholder="Enter your email"
        isInvalid={errorMessages.email !== ""}
        errorMessage={errorMessages.email}
        onChange={handleChange}
        className="text-left"
        autoComplete="off"
      />
      <Input
        isRequired
        name="password"
        value={formValues.password}
        label="Password"
        color="success"
        size="lg"
        variant="bordered"
        placeholder="Enter your password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        isInvalid={errorMessages.password !== ""}
        errorMessage={errorMessages.password}
        onChange={handleChange}
        className="text-left"
        autoComplete="current-password"
      />
      <div className="text-center">
        <Button
          color="primary"
          variant="bordered"
          className="text-lg mt-6 w-full 500:w-1/2"
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
