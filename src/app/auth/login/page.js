"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { getLocalStorage } from "@/app/utils";
import LoginForm from "@/app/components/login-form";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const userInfo = getLocalStorage("todoUserInfo", null);
    if (userInfo !== null) {
      router.push("/");
    }
  }, [router]);

  return (
    <main className="font-inconsolata px-8 500:px-0">
      <div className="text-center border-2 border-green-400 w-full 500:w-2/3 md:w-1/2 xl:w-1/3 mx-auto my-16 sm:my-32 py-10 px-6 rounded-lg">
        <h1 className="font-caveat font-bold text-3xl text-green-400 mb-2">
          LogIn
        </h1>
        <p className="mb-1 text-lg">
          Please login to start tracking your{" "}
          <span className="text-green-400 font-bold">To-dos</span>.
        </p>
        <p className="text-xs lg:text-sm mb-5">
          (Do check the console for the credentials.)
        </p>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
