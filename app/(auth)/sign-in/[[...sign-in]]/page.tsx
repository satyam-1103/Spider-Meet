import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="h-screen flex w-full items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
