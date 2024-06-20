"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Button, Input } from "@nextui-org/react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "../../components/icons";
import { submitLogin } from "../../api/login/route";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
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
      if (response.status === 200) router.push("/");
      else console.log(response.message);
    }
  };

  return (
    <main className="px-8 500:px-0">
      <div className="text-center border border-2 border-green-400 w-full 500:w-2/3 md:w-1/2 xl:w-1/3 mx-auto my-16 sm:my-32 py-10 px-6 rounded-lg">
        <h1 className="font-medium text-2xl text-green-400 mb-2">LogIn</h1>
        <p className="mb-1">
          Please login to start tracking your{" "}
          <span className="text-green-400 font-bold">To-dos</span>.
        </p>
        <p className="text-xs lg:text-sm mb-5">
          (Do check the console for the credentials.)
        </p>
        <section className="flex flex-col gap-6 ">
          <Input
            isRequired
            name="email"
            value={formValues.email}
            type="email"
            label="Email"
            variant="bordered"
            color={"success"}
            placeholder="Enter your email"
            isInvalid={errorMessages.email !== ""}
            errorMessage={errorMessages.email}
            onChange={handleChange}
            className="text-left"
          />
          <Input
            isRequired
            name="password"
            value={formValues.password}
            label="Password"
            variant="bordered"
            color="success"
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
          />
          <div className="text-center">
            <Button
              color="success"
              variant="bordered"
              className="mt-6 w-full 500:w-1/2"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
