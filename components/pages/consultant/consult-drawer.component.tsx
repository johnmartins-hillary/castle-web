"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useDrawer } from "@/context/drawer-context";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetSingleUserQuery } from "@/services/search/get-users";
import { useBookConsultantMutation } from "@/services/booking";
import { useToast } from "@/components/ui/use-toast";

const ConsultDrawer = () => {
  const params = useParams<any>();
  const  {isLoading,isError,isSuccess,data:consultantData}:any = useGetSingleUserQuery({id:params?.index?.[0]})
  const [bookConsultant,{data,isSuccess:consultIsSuccess,isError:consultIsError,error,isLoading:booking}]:any = useBookConsultantMutation()
  const { openDrawer, setOpenDrawer } = useDrawer();
  const [deviceType, setDeviceType] = React.useState(String);
  const [bill,setBill] = React.useState(0)
  const [minute, setMinutes] = React.useState(0);
  const {toast} = useToast()


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



    React.useEffect(()=>{
        setBill(consultantData?.user?.rate * minute)
    },[minute])

 
    React.useEffect(()=>{
      setOpenDrawer(false)
      if (consultIsSuccess) {
        toast({
          title:`${data?.status ? "Appointment is booked" : data?.message}`
        })
 
      }
      else if (consultIsError) {
        setOpenDrawer(false)
        toast({
          title:"Oops!",
          description: `${
            error?.data?.message ? error?.data?.message : "Something went wrong"
          }`
        })
      }
    },[consultIsSuccess,consultIsError,error,isLoading,booking])

    const handleSubmitCall =()=>{
      bookConsultant({agentId:params?.id,timeInMin:minute,mode:'call'})
    }
    const handleSubmitChat =()=>{
      bookConsultant({agentId:params?.id,timeInMin:minute,mode:'text'})
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
          <p className=" text-center font-bold text-lg">{consultantData?.user?.name}</p>
        </div>
        <div className="mb-9 p-3 py-6 rounded-md border-primary_color border w-[122px] ">
          <p className=" text-center font-semibold text-base">
            NGN {consultantData?.user?.rate} per minute
          </p>
        </div>
        <div className=" w-full mb-5 ">
          <p className=" text-center font-normal text-xs">
            How many minutes would you like to consult {consultantData?.user?.name} for?
          </p>
        </div>
        <Counter minute={minute} setMinutes={setMinutes} />
        <div className="w-full mb-5 ">
          <p className=" text-center font-bold text-sm md:text-lg">
            Bill: NGN{bill  ? bill?.toFixed(2) : 0}
          </p>
        </div>
       { bill >0 && <ChatOption handleSubmitCall={handleSubmitCall} handleSubmitChat={handleSubmitChat}  />}
      </Drawer>
    </div>
  );
};

export default ConsultDrawer;

export const Counter = ({minute,setMinutes}:any) => {
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

        {/* <p className=" text-center font-bold text-base">
          {minute}
        </p> */}
        <input type="number" className="w-[50px] text-center outline-none border-none" value={minute} onChange={(e:any)=>{
            setMinutes(e.target.value);
        }} />
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

export const ChatOption = ({handleSubmitCall,handleSubmitChat,bill}:any) => {


  return (
    <div className="w-full flex items-center justify-center gap-5 mt-9">
      {/* <div className="w-20 ">
        <div
          className={` bg-primary_color rounded-md items-center justify-center py-4  flex cursor-pointer w-[48px] md:w-full m-auto mb-3 `}
        >
          <Image
          onClick={handleSubmitCall}
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
      </div> */}

      <div className="w-20 ">
        <div
          className={` bg-primary_color rounded-md items-center justify-center py-4  flex cursor-pointer w-[48px] md:w-full m-auto mb-3  `}
        >
          <Image
          onClick={handleSubmitChat}
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
