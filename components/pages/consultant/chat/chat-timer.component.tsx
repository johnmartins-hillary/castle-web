import { useGetChatDetailsQuery, useInChatMutation } from "@/services/chat";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ChatTimer = ({startTime}:any) => {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();
  const slugs: any = router.query.index;
  const { data, isLoading, isSuccess }: any = useGetChatDetailsQuery({
    id: slugs?.[0],
    booking_ref: slugs?.[1]
  });
  const appointment = data?.appointment;
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

  useEffect(() => {
    if (isSuccess) {
      setTime(appointment?.duration);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (appointment?.duration === undefined) return;
    let interval: any;
    if (startTime) {
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
  }, [time, seconds, appointment?.duration, inChatiIsSuccess,startTime]);
  return (
    <>
      <div className=" bg-primary_color fixed w-[72px] h-[70px] rounded-full bottom-[120px] flex flex-col justify-center items-center ">
        <p className=" w-max flex text-[11.5px] text-center text-white ">
          {time} :{seconds}
        </p>
        <p className=" w-max flex text-[11.5px] text-center text-white ">
          min left
        </p>
      </div>
    </>
  );
};

export default ChatTimer;
