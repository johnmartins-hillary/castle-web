import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useLogOutUserMutation } from "@/services/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SettingsLogOut = () => {
  const [logOutUser, { isLoading, isSuccess, isError }] =
    useLogOutUserMutation();
  const { toast } = useToast();
  const router = useRouter();
  const logOutHandler = () => {
    logOutUser();
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/auth/sign-in");
      toast({
        title: "Logout Successful"
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast({
        title: "Oops!",
        description: "Logout unSuccessful"
      });
    }
  }, [isError]);
  return (
    <>
      <div className="w-full mt-[30px] pb-[75px] flex items-center md:hidden justify-start">
        <Button
          onClick={logOutHandler}
          className="bg-primary_color rounded-xl  text-white w-[110px] "
        >
          {isLoading ? (
            <Image
              src={"/images/loader.gif"}
              width={20}
              height={20}
              alt="loader"
            />
          ) : (
            "Log Out"
          )}
        </Button>
      </div>
    </>
  );
};

export default SettingsLogOut;
