import Modal from "@/components/modal/modal.component";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useEndAppointmentMutation, useLazyAcceptBookingQuery, useLazyCancelBookingQuery, useLazyRejectBookingQuery } from "@/services/booking";
import { useEffect } from "react";

const BookingInfoModal = ({ data, showModal, setShowModal }: any) => {
  const { title, agent, customer, reference, duration, status }: any = data;
  const statusColorClass = getStatusColorClass(status);
  const { toast } = useToast();

  const [cancelbtnTrigger, { isError: cancelIsError, isLoading: cancelLoading, isSuccess: cancelSuccess, data: cancelData, error: cancelError }]: any = useLazyCancelBookingQuery();
  const [rejectBtnTrigger, { isError: rejectIsError, isLoading: rejectLoading, isSuccess: rejectSuccess, data: rejectData, error: rejectError }]: any = useLazyRejectBookingQuery();
  const [acceptbtnTrigger, { isError: acceptIsError, isLoading: acceptLoading, isSuccess: acceptSuccess, data: acceptData, error: acceptError }]: any = useLazyAcceptBookingQuery();

  useEffect(() => {
    if (cancelSuccess) {
      setShowModal(false);
      toast({ title: cancelData?.message });
    } else if (rejectSuccess) {
      setShowModal(false);
      toast({ title: rejectData?.message });
    } else if (acceptSuccess) {
      setShowModal(false);
      toast({ title: acceptData?.message });
    }

    if (cancelError) {
      setShowModal(false);
      toast({ title: "Error cancelling booking", description: cancelError.message || "Something went wrong" });
    }

    if (rejectError) {
      setShowModal(false);
      toast({ title: "Error rejecting booking", description: rejectError.message || "Something went wrong" });
    }

    if (acceptError) {
      // Handle accept error
      setShowModal(false);
      toast({ title: "Error accepting booking", description: acceptError.message || "Something went wrong" });
    }
  }, [cancelSuccess, rejectSuccess, acceptSuccess, cancelError, rejectError, acceptError, setShowModal, toast]);

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

  const cancelHandler = () => {
    cancelbtnTrigger({ ref: reference });
  };

  const acceptHandler = () => {
    acceptbtnTrigger({ ref: reference });
  };

  const rejectHandler = () => {
    rejectBtnTrigger({ ref: reference });
  };

  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white rounded-[24px] flex flex-col items-center justify-center33 shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] md:w-[655px] lg:w-[758px] lg:px-[162px]">
          <div className="w-full mt-[12px]">
            <h4 className="text-center font-bold text-[20px]">{title}</h4>
          </div>

          <div className="w-full mt-[20px]">
            <div className="w-full mb-[12px] flex items-center justify-between ">
              <p className="text-left font-medium text-[16px]">Consultant:</p>
              <p className="text-right font-medium text-[16px]">Consultant: {agent?.name}</p>
            </div>

            <div className="w-full mb-[12px] flex items-center justify-between ">
              <p className="text-left font-medium text-[16px]">Customer:</p>
              <p className="text-right font-medium text-[16px]">{customer?.name}</p>
            </div>

            <div className="w-full mb-[12px] flex items-center justify-between ">
              <p className="text-left font-medium text-[16px]">Duration:</p>
              <p className="text-right font-medium text-[16px]">{duration} mins</p>
            </div>

            <div className="w-full mb-[12px] flex items-center justify-between ">
              <p className={`text-le font-medium text-[16px]`}>
                Status:
              </p>
              <p className={`text-right font-medium text-[16px]`}>
              <span className={`${statusColorClass}`}>{status}</span>
              </p>
            </div>

            {status?.includes("pending") && title === "Recent Appointment" ? (
              <div className="w-full mt-14 flex items-center justify-center gap-3">
                <Button onClick={acceptHandler} disabled={acceptLoading} className="bg-primary_color hover:opacity-50 ">
                {acceptLoading ? 'Accepting...' : 'Accept'}
                </Button>
                <Button onClick={rejectHandler} disabled={rejectLoading} className="bg-red-700 hover:opacity-50 hover:bg-red-600 ">
                {rejectLoading ? 'Rejecting...' : 'Reject'}
                </Button>
              </div>
            ) : (
              status?.includes("pending") &&   <div className="w-full mt-14 flex items-center justify-center">
                <Button onClick={cancelHandler} disabled={cancelLoading} className="bg-orange-700 hover:opacity-50 hover:bg-orange-600">
                {cancelLoading ? 'Cancelling...' : 'Cancel'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookingInfoModal;
