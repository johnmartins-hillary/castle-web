'use client'
import { useEffect, useState } from "react";
import Consultant from "../explore/consultant.component";
import { usersData } from "../dashboard/user-data";


const YourConsultants = () => {
    const [users, setUsers] = useState([]);
    // const getData = async () => {
    //   await fetch("https://dummyjson.com/users")
    //     .then(res => res.json())
    //     .then(json => setUsers(json?.users));
    // };

    // useEffect(()=>{
    //     getData()
    // },[])
    return ( 
        <>
        
        <div className="w-full flex items-center justify-start gap-2 flex-wrap  mt-14 md:justify-between md:gap-0 " >
            {usersData?.slice(0,20)?.map(({firstName,lastName,id})=>(
                <Consultant firstName={firstName} lastName={lastName} key={id} />
            ))}
        </div>
        </>
     );
}
 
export default YourConsultants;