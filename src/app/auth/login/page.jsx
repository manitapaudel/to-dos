"use client";

import { useMemo, useState } from "react";
import { Button, Input } from "@nextui-org/react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "../../components/icons";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);
  // View/Hide Password
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log({ formValues });
  };

  return (
    <div className="text-center border border-2 border-green-400 w-1/3 mx-auto my-32 py-10 px-6 rounded-lg">
      <h1 className="font-medium text-2xl text-green-400 mb-2">LogIn</h1>
      <p className="mb-5">
        Please login to start tracking your{" "}
        <span className="text-green-400 font-bold">To-dos</span>.
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
          errorMessage="Please enter a valid email"
          onChange={handleChange}
          className=""
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
          onChange={handleChange}
          className=""
        />
        <div className="text-center">
          <Button
            color="success"
            variant="bordered"
            className="mt-6 w-1/2"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Login;
