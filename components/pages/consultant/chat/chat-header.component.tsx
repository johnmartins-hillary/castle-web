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
import React, { useEffect, useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { BanIcon, LinkIcon } from "@/components/icons/icons";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useGetChatDetailsQuery } from "@/services/chat";
import { useEndAppointmentMutation } from "@/services/booking";
type Checked = DropdownMenuCheckboxItemProps["checked"];
const ChatHeader = ({ eventSrc }: any) => {
  const router = useRouter();
  const slugs: any = router.query.index;
  const { data, isLoading }: any = useGetChatDetailsQuery({
    id: slugs?.[0],
    booking_ref: slugs?.[1]
  });
  const profileImage = data?.user?.profile_image;
  const isVerified = data?.user?.verification_status === 1 ? true : false;
  const [endAppoiintment, { isSuccess: endAppointmentSuccess }]: any =
    useEndAppointmentMutation();
  const [route, setRoute] = useState("");
  const booking_ref = data?.appointment?.booking_ref;

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
  return (
    <>
      <div className="w-full h-[70px] flex items-stretch justify-center">
        <div className={`${ data?.appointment?.status === "accepted" && data?.appointment?.status === "active"   ?  "w-3/5" : "w-full" } flex items-center justify-start gap-5 `}>
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
            className="w-[45px] h-[45px] rounded-full bg-faint_grey  shadow-md shadow-faint_grey flex items-center justify-center  md:w-[60px] md:h-[60px] "
            isVerified={isVerified}
          />
          <p className="font-bold text-sm md:text-xl truncate ">{slugs?.[2]}</p>
        </div>
        {data?.appointment?.status === "accepted"   || data?.appointment?.status === "active"   && (
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
              {/* <DropdownMenuItem
        style={{fontFamily:"Poppins"}}
        className=" font-normal gap-3 "
        >
       <LinkIcon color={'black'} onClick={()=>{}}  size={16} className="rotate-95" /> Attachments
        </DropdownMenuItem> */}
              
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
        </div>
               )}
      </div>
    </>
  );
};

export default ChatHeader;
