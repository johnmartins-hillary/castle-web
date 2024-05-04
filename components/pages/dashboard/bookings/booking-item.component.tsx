import { dateFormatter, formatDate } from "@/utilities/helpers";
import Image from "next/image";
import { IoEllipsisVertical } from "react-icons/io5";
import BookingInfoModal from "./booking-info-modal.component";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AvatarWithBadge from "@/components/avatar/avatar.component";
import { useLazyGetBookingHistoryQuery } from "@/services/booking";
import { useVoiceCall } from "@/context/app-context";

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
  profile_pic?: any;
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
  profile_pic
}: Props) => {
  const statusColorClass = getStatusColorClass(status);
  const router = useRouter();
  const data = {
    title,
    time,
    customer,
    agent,
    amount,
    duration,
    reference,
    status,
    mode
  };
  const [showModal, setShowModal] = useState<boolean>(false);
  const [triggerHistory, { data: historyData, isSuccess }]: any =
    useLazyGetBookingHistoryQuery();
  const [modalData, setModalData] = useState(data);
  const {new_booking} = useVoiceCall()
  function getStatusColorClass(status: string | undefined) {
    switch (status) {
      case "pending":
        return "bg-orange-500";
      case "rejected":
        return "bg-[#FE534C]";
      case "accepted":
        return "bg-[#209841]";
      case "ended":
        return "bg-[#676565]";
      default:
        return "bg-[#676565]";
    }
  }

  const chatNavigator = () => {
    const id = title === "Recent Booking" ? agent?.id : customer?.id;
    const name =
      title === "Recent Booking"
        ? agent?.name
          ? agent?.name
          : agent?.username
        : customer?.name
        ? customer?.name
        : customer?.username;
    router.push(`chat/${id}/${reference}/${name}`);
  };

  const disableChatBtn =
    mode !== "text" || status === "cancelled" || status === "rejected";
  // useEffect(() => {
  //   if (new_booking) {
  //     const latestElement = historyData?.appointment?.slice(0, 0);
  //     setModalData(latestElement);
  //   }
  // }, [new_booking]);


  return (
    <>
      <div className="w-full flex items-center mt-[23px] justify-between gap-[3.6px] border-b-[1px] border-b-light_grey mb-[12px] pb-[12px]">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex-shrink-0 mr-4">
            <AvatarWithBadge
              className="w-[59px] h-[59px] rounded-full"
              profile_image={profile_pic}
              isVerified
            />
          </div>
          <div className="flex flex-col">
            <p className=" text-[11px] leading-[12px] md:text-sm text-left font-light">
              {`${title} with`}{" "}
              <span className="m-0 p-0 font-bold">{`${
                title === "Recent Booking" ? agent?.name : customer?.name
              }`}</span>
            </p>
            <p className=" text-[10px] md:text-xs text-light  font-light mt-1">
              {formatDate(time)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-1/4">
          <p
            className={` text-[11px] md:text-sm text-center font-light p-[5px] rounded-[6px] text-white ${statusColorClass}`}
          >
            {status}
          </p>
        </div>

        <div className="flex items-center justify-center w-1/4 gap-3">
          <button
            onClick={chatNavigator}
            disabled={disableChatBtn}
            className={`w-auto ${
              disableChatBtn ? "bg-light_grey" : "bg-primary_color"
            } rounded-full p-[5px] flex items-center justify-center left-[9.5px] relative`}
          >
            <Image
              width={16}
              height={16}
              src={"/images/chat-conversation.png"}
              alt="chat-conversation"
            />
          </button>
          {/* <button
            onClick={callNavigator}
            disabled={disableCallBtn}
            className={`w-auto ${
              disableCallBtn ? "bg-light_grey" : "bg-primary_color"
            } rounded-full p-[5px] flex items-center justify-center`}
          >
            <Image
              width={16}
              height={16}
              src={"/images/hang-up.png"}
              alt="hang-up"
            />
          </button> */}
        </div>

        <div className="flex items-end justify-center w-1/4">
          <IoEllipsisVertical
            onClick={() => {
              setShowModal(true);
            }}
            size={18}
            className="cursor-pointer"
          />
        </div>
      </div>
      <BookingInfoModal
        data={modalData}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default BookingItem;
