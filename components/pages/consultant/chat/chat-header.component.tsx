import AvatarWithBadge from "@/components/avatar/avatar.component";
import { Button } from "@/components/ui/button";
import { MdPhone } from "react-icons/md";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import React, { use, useEffect, useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { BanIcon, LinkIcon } from "@/components/icons/icons";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useGetChatDetailsQuery, useInChatMutation } from "@/services/chat";
import { useEndAppointmentMutation } from "@/services/booking";
import { chatTimer } from "@/utilities/helpers";
type Checked = DropdownMenuCheckboxItemProps["checked"];
const ChatHeader = ({ eventSrc }: any) => {
  const router = useRouter();
  const slugs: any = router.query.index;
  const { data, isLoading, isSuccess }: any = useGetChatDetailsQuery({
    id: slugs?.[0],
    booking_ref: slugs?.[1]
  });
  const profileImage = data?.user?.profile_image;
  const isVerified = data?.user?.verification_status === 1 ? true : false;
  const [endAppoiintment, { isSuccess: endAppointmentSuccess }]: any =
    useEndAppointmentMutation();
  const [
    inChatHandler,
    {
      data: inChatData,
      isLoading: inChatloading,
      isSuccess: inChatiIsSuccess,
      isError,
      error
    }
  ]: any = useInChatMutation();
  const [route, setRoute] = useState("");
  const appointment = data?.appointment;
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const booking_ref = appointment?.booking_ref;

  const endAppointmentHandler = (route: any) => {
    endAppoiintment({ booking_ref: booking_ref });
    setRoute(route);
  };

  useEffect(() => {
    if (endAppointmentSuccess) {
      router.replace(route);
      eventSrc?.close();
    }
  }, [endAppointmentSuccess]);
  useEffect(() => {
    if (isSuccess) {
      setTime(appointment?.duration);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (appointment?.duration === undefined) return;
    let interval: any;
    if (inChatiIsSuccess) {
      interval = setInterval(() => {
        if (time === 0 && seconds === 0) {
          clearInterval(interval);
        } else if (seconds === 0) {
          if (time === 0 && seconds !== 0) {
            clearInterval(interval);
          } else {
            setTime((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time, seconds, appointment?.duration, inChatiIsSuccess]);
  return (
    <>
      <div className="w-full h-[70px] flex items-stretch justify-center">
        <div
          className={`${
            data?.appointment?.status === "accepted" &&
            data?.appointment?.status === "active"
              ? "w-3/5"
              : "w-full"
          } flex items-center justify-start gap-5 `}
        >
          <IoIosArrowBack
            className=" w-[23px] h-[23px] md:w-[34px] md:h-[34px] cursor-pointer"
            onClick={() => {
              router.back();
            }}
          />
          <AvatarWithBadge
            profile_image={profileImage}
            width={70}
            height={70}
            className={`${
              data?.appointment?.status === "active"
                ? "w-[35px] h-auto rounded-[35px]"
                : "w-[45px] h-[45px]"
            } rounded-full bg-faint_grey  shadow-md shadow-faint_grey flex items-center justify-center  md:w-[60px] md:h-[60px] `}
            isVerified={isVerified}
          />
          <p className="font-bold text-sm md:text-xl truncate ">{slugs?.[2]}</p>
        </div>
        {data?.appointment?.status === "active" && (
          <div className="w-2/5  flex items-center justify-end gap-5 px-3 ">
            {/* <Button onClick={()=>endAppointmentHandler(`/consultant/${data?.user?.id}`)} className=" bg-black w-[35px] h-[35px] rounded-[12px] p-[10px] md:p-[10px]  md:w-[46.11px] md:h-[46.11px]  md:rounded-2xl hover:bg-black rotate-45  " >
          <MdPhone size={50} className=" -rotate-45" />
          </Button> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="outline-none">
                  <PiSlidersHorizontalLight className="cursor-pointer w-[23px] h-[23px] md:w-[35px] md:h-[35px] " />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-light_grey shadow-none ">
                <DropdownMenuItem
                  style={{ fontFamily: "Poppins" }}
                  className=" font-normal gap-3 "
                  onClick={() => endAppointmentHandler(`/dashboard`)}
                >
                  <BanIcon
                    color={"black"}
                    className={""}
                    onClick={() => {}}
                    size={16}
                  />{" "}
                  End Chat
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <p className=" w-max flex text-[11.5px] md:text-[13px] lg:text-[14px] ">
              {time} :{seconds}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatHeader;
