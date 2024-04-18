"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useDrawer } from "@/context/drawer-context";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from "next/image";

const ConsultDrawer = () => {
  const { openDrawer, setOpenDrawer } = useDrawer();
  const [deviceType, setDeviceType] = React.useState(String);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 680px)");

    function handleResize() {
      if (mediaQuery.matches) {
        setDeviceType("mobile");
      } else {
        const tabletMediaQuery = window.matchMedia("(max-width: 768px)");

        if (tabletMediaQuery.matches) {
          setDeviceType("tablet");
        } else {
          setDeviceType("desktop");
        }
      }
    }

    handleResize();

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  let drawerWidth = "60%";
  if (deviceType === "desktop") {
    drawerWidth = "40%";
  } else if (deviceType === "mobile") {
    drawerWidth = "100%";
  }

  return (
    <div className="w-full">
      <Drawer
        style={{
          width: drawerWidth
        }}
        className=" bg-white  shadow-primary_color shadow-xl rounded-xl h-screen p-6 flex flex-col justify-center items-center "
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        direction="right"
      >
        <div className="w-full mb-5 ">
          <p className=" text-center font-bold text-lg">Val Okafor</p>
        </div>
        <div className="mb-9 p-3 py-6 rounded-md border-primary_color border w-[122px] ">
          <p className=" text-center font-semibold text-base">
            NGN 200 per minute
          </p>
        </div>
        <div className=" w-full mb-5 ">
          <p className=" text-center font-normal text-xs">
            How many minutes would you like to consult Val for?
          </p>
        </div>
        <Counter />
        <div className="w-full mb-5 ">
          <p className=" text-center font-bold text-sm md:text-lg">
            Bill: NGN 6, 000
          </p>
        </div>
        <ChatOption />
      </Drawer>
    </div>
  );
};

export default ConsultDrawer;

export const Counter = () => {
  const [minute, setMinutes] = React.useState(0);
  const minuteIncrement = React.useMemo(
    () => () => {
      if (minute < 60) {
        setMinutes(minute + 1);
      }
    },
    [minute]
  );
  const minuteDecrement = React.useMemo(
    () => () => {
      if (minute > 0) {
        setMinutes(minute - 1);
      }
    },
    [minute]
  );
  return (
    <div className="my-9 w-full flex flex-col items-center justify-center ">
      <div className="w-1/2  flex items-center justify-evenly  mb-3 ">
        <Button
          onClick={minuteDecrement}
          className="bg-primary_color  py-3 md:py-7  w-[37px] md:w-16 text-white hover:bg-primary_color "
        >
          -
        </Button>

        <p className=" text-center font-bold text-base">
          {minute}
        </p>
        <Button
          onClick={minuteIncrement}
          className="bg-primary_color  py-3 md:py-7  text-white w-[37px] md:w-16 hover:bg-primary_color "
        >
          +
        </Button>
      </div>
      <div className=" w-full  ">
        <p className=" text-center font-normal text-xs">Minutes</p>
      </div>
    </div>
  );
};

export const ChatOption = () => {
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-9">
      <div className="w-20 ">
        <div
          className={` bg-primary_color rounded-md items-center justify-center py-4  flex cursor-pointer w-[48px] md:w-full m-auto mb-3 `}
        >
          <Image
            width={20.26}
            height={20.26}
            src={"/images/hang-up.png"}
            className=" object-contain"
            alt="hang-up"
          />
        </div>
        <div className=" w-full  ">
          <p className=" text-center font-normal text-xs">Voice Call</p>
        </div>
      </div>

      <div className="w-20 ">
        <div
          className={` bg-primary_color rounded-md items-center justify-center py-4  flex cursor-pointer w-[48px] md:w-full m-auto mb-3  `}
        >
          <Image
            width={20.26}
            height={20.26}
            src={"/images/chat-conversation.png"}
            className=" object-contain"
            alt="chat-conversation"
          />
        </div>
        <div className=" w-full  ">
          <p className=" text-center font-normal text-xs">Chat</p>
        </div>
      </div>
    </div>
  );
};
