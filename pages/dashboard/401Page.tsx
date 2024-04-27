import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const UnAuthorizedPage = () => {
  const router = useRouter();

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center">
      <h1 className="text-8xl text-gray-500 text-bold">401</h1>
      <p className="text-lg">You are not allowed to view this page</p>

      <div className="flex gap-4 items-center">
        <Button
          className="bg-black text-white md:w-60"
          onClick={() => {
            router.replace("/auth/sign-up");
          }}
        >
          Sign up
        </Button>
        <Button
          className="bg-white text-black  border-2 border-gray-700 md:w-60 hover:text-white"
          onClick={() => {
            router.replace("/auth/sign-in");
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default UnAuthorizedPage;
