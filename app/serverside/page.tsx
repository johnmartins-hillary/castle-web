import { TokenChecker } from "@/utilities/helpers";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const ServerSide = ({ children }: any) => {
  // const accessToken = localStorage.getItem("token")

  useLayoutEffect(() => {
    if (!TokenChecker()) {
      redirect("/");
    }
  }, []);
  return children;
};

export default ServerSide;
