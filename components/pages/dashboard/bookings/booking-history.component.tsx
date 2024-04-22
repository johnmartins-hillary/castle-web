import { useGetBookingHistoryQuery } from "@/services/booking";
import BookingItem from "./booking-item.component";

interface props{
    title?:string,
    status?:string,
    reference?:string,
    amount?:any,
    customer?:any,
    agent?:any,
    mode?:any,
    duration?:string,
    time?:string,

}
const BookingHistory = () => {
    const {data,isLoading,isError,isSuccess,}:any = useGetBookingHistoryQuery()
    const  bookings = data?.appointments
    return (
        <>
        <div className="w-full mt-[30px]" >
            <div className="w-full m " >
            <h3 className="font-medium text-[16px] border-b-[1px] border-b-light_grey text-left lg:text-[20px] pb-[12px] " >Booking History</h3>
            </div>

            <div className="w-full mt-[24px]" >
                { isLoading ? <p>Loading...</p> :  bookings?.map(({title,time,status,reference,agent,amount,customer,mode,duration}:props)=>(
                      <BookingItem key={reference} time={time} title={title} status={status} reference={reference} agent={agent} amount={amount} customer={customer} mode={mode} duration={duration}  />
                ))}
            </div>
        </div>
        </>
      );
}
 
export default BookingHistory;