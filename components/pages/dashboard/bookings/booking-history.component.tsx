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
    const {data,isFetching,isError,isSuccess,}:any = useGetBookingHistoryQuery()
    const  bookings = data?.appointments
    console.log(bookings)
    return (
        <>
        <div className="w-full mt-[30px] pb-[75px] " >
            <div className="w-full m " >
            <h3 className="font-medium text-[16px] border-b-[1px] border-b-light_grey text-left lg:text-[20px] pb-[12px] " >Booking History</h3>
            </div>
            { isFetching ?  <div className="w-full " >
                    <p className="text-base text-center" >Loading</p>
                    </div>:bookings?.length > 0 ?   
                    <>
                    
                    {bookings?.map(({title,time,status,reference,agent,amount,customer,mode,duration,profile_pic}:any)=>(
                <BookingItem key={reference} time={time} title={title} status={status} reference={reference} profile_pic={profile_pic} agent={agent} amount={amount} customer={customer} mode={mode} duration={duration}  />
                    ))}
                    </>
                    
                    : <div className="w-full mt-5 " >
                    <p className="text-sm text-gray-400 text-left" >No bookings/appointments available</p>
                    </div>}

            
        </div>
        </>
      );
}
 
export default BookingHistory;