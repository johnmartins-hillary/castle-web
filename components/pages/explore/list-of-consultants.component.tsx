'use client'
import { useEffect, useState } from "react";
import Consultant from "./consultant.component";
import { usersData } from "../dashboard/user-data";

const ListOfConsultants = () => {
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
        
        <div className="w-full flex items-center gap-[14px] justify-center md:gap-0 md:justify-between flex-wrap " >
            {usersData?.slice(0,20)?.map(({firstName,lastName,id})=>(
                <Consultant firstName={firstName} lastName={lastName} key={id} />
            ))}
        </div>
        </>
     );
}
 
export default ListOfConsultants;