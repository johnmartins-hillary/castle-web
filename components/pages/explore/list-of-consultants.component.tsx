'use client'
import { useEffect, useMemo, useState } from "react";
import Consultant from "./consultant.component";
import { usersData } from "../dashboard/user-data";
import { useGetUsersQuery, useSearchUsersQuery } from "@/services/search/get-users";
import { Button } from "@/components/ui/button";
import { Forward, ForwardIcon } from "lucide-react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const ListOfConsultants = () => {
    const [pageNo,setPageNo] = useState(1)
    const keyword = useSelector(({users}:any)=>users?.keyword)
    const {data:usersList,isLoading,isError}:any = useGetUsersQuery({page_no:pageNo}) || {}
    const {data:searchedUsers}:any = useSearchUsersQuery({keyword:keyword}) || {}
    const next_pg = usersList?.users?.next_page_url
    const prev_pg = usersList?.users?.prev_page_url
        
    const decrementMemo = useMemo(()=>()=>{
        setPageNo(pageNo - 1)
    },[pageNo])
    const incrementMemo = useMemo(()=>()=>{
        setPageNo(pageNo + 1)
    },[pageNo])
    return ( 
        <>
        
        <div className="w-full flex items-center gap-[14px] justify-center md:gap-0 md:justify-between flex-wrap " >
            {!isError && !isLoading && usersList?.users?.data?.length >0 && 
            
            <>
            {keyword === "" ? usersList?.users?.data?.map(({name,username,id,verification_status}:any)=>(
                <Consultant name={name} username={username} verification_status={verification_status} id={id} key={id} />
            ))   :  searchedUsers?.users?.length >0  && searchedUsers?.users?.map(({name,username,id,verification_status}:any)=>(
                <Consultant name={name} username={username} verification_status={verification_status} id={id} key={id} />
            )) }
            </>
            
            }

            <div className={` mt-[30px] flex items-center ${next_pg ? "justify-between": "justify-start"} w-full md:w-[200px] md:mx-auto`} >
                { prev_pg   &&    <div className="w-auto flex items-center justify-between gap-[4px]" >
           { <IoMdArrowBack onClick={decrementMemo} size={23} className=" cursor-pointer" />}
            <p className=" font-medium text-sm" >Prev</p>            
            </div>}
                {next_pg &&   <div className="w-auto flex items-center justify-between gap-[4px]" >
            <p className=" font-medium text-sm" >Next</p>
            <IoMdArrowForward onClick={incrementMemo} size={23} className=" cursor-pointer" />
            </div>}
            </div>
        </div>
        </>
     );
}
 
export default ListOfConsultants;