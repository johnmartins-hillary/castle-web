import { dateFormatter } from "@/utilities/helpers";
import Image from "next/image";
import { IoEllipsisVertical } from "react-icons/io5";
import BookingInfoModal from "./booking-info-modal.component";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useVoiceCall } from "@/context/app-context";


interface Props {
  title?: string;
  status?: string;
  reference?: string;
  amount?: any;
  customer?: any;
  agent?: any;
  mode?: any;
  duration?: string;
  time?: string;
  data?:any
}

const BookingItem = ({
  time,
  title,
  customer,
  agent,
  amount,
  duration,
  reference,
  status,
  mode,
}: Props) => {

  const statusColorClass = getStatusColorClass(status);
  const router = useRouter();
  const data = {title,time,customer,agent,amount,duration,reference,status,mode}
  // const {
  //   callHandler,
  // } = useVoiceCall();
  const [showModal,setShowModal] = useState<boolean>()
  function getStatusColorClass(status: string | undefined) {
    switch (status) {
      case "pending":
        return "text-orange-500";
      case "rejected":
        return "text-red-500";
      case "accepted":
        return "text-green-500"; 
      case "ended":
        return "text-blue-500"; 
      default:
        return "text-gray-500";
    }
  }

  const chatNavigator =()=>{
    const id =   title === "Recent Booking" ? agent?.id : customer?.id
    const name =   title === "Recent Booking" ? agent?.name ? agent?.name : agent?.username : customer?.name ? customer?.name : customer?.username
    router.push(`chat/${id}/${reference}/${name}`)
  }
  // const callNavigator =()=>{
  //   const id =   title === "Recent Booking" ? agent?.id : customer?.id
  //   const name =   title === "Recent Booking" ? agent?.name : customer?.name
  //   // router.push(`chat/${id}/${reference}/${name}`)
  //   callHandler({receiver_id:id,booking_ref:reference})
  // }

  const disableChatBtn = mode !== "text" ? true :  status === "cancelled" || status === "rejected" ? true : false
  // const disableCallBtn = mode !== "call" ? true : status === "cancelled" || status === "rejected" ? true : false
  return (
    <>
      <div className="w-full flex items-start justify-between border-b-[1px] border-b-light_grey mb-[12px] pb-[12px]">
        <div className="w-[50%] md:w-[25%]">
          <p className="text-[12.5px] text-left font-light lg:text-[14px]">
            {`${title} with ${
              title === "Recent Booking" ? agent?.name : customer?.name
            }`}
          </p>
          <p className="text-[11px] text-light text-faint_grey font-light mt-[5px] lg:text-[12.5px]">
            {dateFormatter(time)}
          </p>
        </div>

        <div className="w-[20%] md:w-[25%]">
          <p className={`text-[12.5px] text-center font-light lg:text-[14px] capitalize ${statusColorClass}`}>
            {status}
          </p>
        </div>

        <div className="w-[20%] flex items-center justify-center gap-[13px]">
          <button onClick={chatNavigator} disabled={disableChatBtn} className={`w-auto ${ disableChatBtn ?  ' bg-light_grey' : 'bg-primary_color'} rounded-full p-[5px] flex items-center justify-center`}>
            <Image
              width={96}
              height={96}
              src={"/images/chat-conversation.png"}
              className="object-cover w-[10.85px] md:w-[16px]"
              alt="chat-conversation"
            />
          </button>
          {/* <button onClick={callNavigator} disabled={disableCallBtn} className={`w-auto ${disableCallBtn ?  ' bg-light_grey' : 'bg-primary_color'} rounded-full p-[5px] flex items-center justify-center`}>
            <Image
              width={96}
              height={96}
              src={"/images/hang-up.png"}
              className="object-cover w-[10.85px] md:w-[16px]"
              alt="hang-up"
            />
          </button> */}
        </div>

        <div className="w-[10%] flex items-center justify-center">
          <IoEllipsisVertical onClick={()=>{setShowModal(true)}} size={14} className="cursor-pointer lg:size-[18px]" />
        </div>
      </div>
      <BookingInfoModal data={data} showModal={showModal}  setShowModal={setShowModal} />
    </>
  );
};

export default BookingItem;
