import { useEffect, useMemo, useState } from "react";
import Consultant from "./consultant.component";
import { usersData } from "../dashboard/user-data";
import { useGetUsersQuery, useLazyGetUsersQuery, useLazySearchUsersByCategoryQuery, useLazySearchUsersQuery } from "@/services/search/get-users";
import { Button } from "@/components/ui/button";
import { Forward, ForwardIcon } from "lucide-react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { UsersLoader } from "@/components/loaders";
import { userApi } from "@/services/user";

const ListOfConsultants = ({consultants,setConsulants}:any) => {
    const [pageNo, setPageNo] = useState(1);
    const keyword = useSelector(({ users }: any) => users?.keyword);
    const { data: usersList, isLoading, isError,isSuccess,isFetching:fetchingUsers }: any = useGetUsersQuery({ page_no: pageNo })
    const [trigger,{ data: searchedUsers,isSuccess:searchedUsersSuccess,isFetching } ]:any= useLazySearchUsersQuery()
    const [t,{ data: searchedUsersByCategory, isLoading: categoryLoading, isFetching: categoryFetching}]: any = useLazySearchUsersByCategoryQuery()
    const decrementMemo = useMemo(() => () => {
        setPageNo(pageNo - 1);
    }, [pageNo]);
    const incrementMemo = useMemo(() => () => {
        setPageNo(pageNo + 1);
    }, [pageNo]);

    useEffect(()=>{
        if (isSuccess) {
            setConsulants( usersList?.users?.data )
        }
    },[isLoading,isSuccess])    
    return (
        <>
            <div className="w-full flex items-center gap-[14px] justify-start md:gap-0 md:justify-between flex-wrap pb-[75px] ">
                {isFetching || categoryFetching || fetchingUsers && <>
                
                {Array.from({length:6}).map((index:any)=>(
                    <UsersLoader key={index} />
                ))}
                
                </>}

                {consultants?.length > 0 && <>
                {  consultants?.map(({ name, username, id, verification_status, profile_image }: any) => (
                        <Consultant profile_image={profile_image} name={name} username={username} verification_status={verification_status} id={id} key={id} />
                    ))}
                </>}

                {consultants?.length ==0 &&   <p className="font-medium text-sm text-center text-gray-400 " >No users available</p>}

                <div className={`mt-[30px] flex items-center ${consultants?.users?.next_page_url ? "justify-between" : "justify-start"} w-full md:w-[200px] md:mx-auto`}>
                    {consultants?.users?.prev_page_url &&
                        <div className="w-auto flex items-center justify-between gap-[4px]">
                            <IoMdArrowBack onClick={decrementMemo} size={23} className="cursor-pointer" />
                            <p className="font-medium text-sm">Prev</p>
                        </div>
                    }
                    {consultants?.users?.next_page_url &&
                        <div className="w-auto flex items-center justify-between gap-[4px]">
                            <p className="font-medium text-sm">Next</p>
                            <IoMdArrowForward onClick={incrementMemo} size={23} className="cursor-pointer" />
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default ListOfConsultants;
