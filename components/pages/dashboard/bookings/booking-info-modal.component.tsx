import Modal from "@/components/modal/modal.component";
import { Button } from "@/components/ui/button";
import { useEndAppointmentMutation, useLazyAcceptBookingQuery, useLazyCancelBookingQuery, useLazyRejectBookingQuery } from "@/services/booking";

const BookingInfoModal = ({ data, showModal, setShowModal }: any) => {
const {title,agent,customer,reference,duration,status,}:any = data
const statusColorClass = getStatusColorClass(status);

// const [cancelbtnTrigger,{isError:cancelIsError, isLoading:cancelLoading,isSuccess:cancelSuccess}] = useLazyCancelBookingQuery()
// const [cancelbtnTrigger,{isError:cancelIsError, isLoading:cancelLoading,isSuccess:cancelSuccess}] = useLazyRejectBookingQuery()
// const [cancelbtnTrigger,{isError:cancelIsError, isLoading:cancelLoading,isSuccess:cancelSuccess}] = useLazyAcceptBookingQuery()


function getStatusColorClass(status: string | undefined) {
    switch (status) {
      case "pending":
        return "text-orange-500"; // Orange color
      case "rejected":
        return "text-red-500"; // Red color
      case "accepted":
        return "text-green-500"; // Green color
      case "ended":
        return "text-blue-500"; // Blue color
      default:
        return "text-gray-500"; // Default color (gray)
    }
  }

  
//   const cancelHandler =()=>{
//     cancelbtnTrigger({ref:reference})
//   }
  return (
    <>
      <Modal open={showModal} onClose={()=>{
        setShowModal(false)
      }} >
        <div className="bg-white rounded-[24px] flex items-center justify-center33 shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px] lg:w-[758px] lg:px-[162px] ">
          <div  className="w-full mt-[12px] " >
            <h4 className="text-center font-bold text-[20px]" >{title}</h4>
          </div>

          <div className="w-full mt-[20px]">
            <div className="w-full mb-[12px]">
              <p className=" text-center font-medium text-[16px]" >Consultant: {agent?.name}</p>
            </div>

            <div className="w-full mb-[12px]">
              <p className=" text-center font-medium text-[16px]"  >Customer: {customer?.name}</p>
            </div>

            <div className="w-full mb-[12px]">
              <p className=" text-center font-medium text-[16px]" >Duration: {duration} mins</p>
            </div>
            <div className="w-full mb-[12px]">
              <p  className={`text-center font-medium text-[16px] `}>Status: <span className={`${statusColorClass}`} >{status}</span></p>
            </div>

          {  status?.includes("pending") && title === "Recent Appointment" ?  <div className="w-full mt-14 flex items-center justify-center gap-3" >
                <Button className=" bg-primary_color" >Accept</Button>
                <Button className=" bg-red-700" >Reject</Button>
            </div>:
            <div className="w-full mt-14 flex items-center justify-center">
                <Button  className=" bg-orange-700">Cancel</Button>
            </div>}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookingInfoModal;
