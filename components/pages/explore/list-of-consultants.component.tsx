import { useEffect, useMemo, useState } from "react";
import Consultant from "./consultant.component";
import { usersData } from "../dashboard/user-data";
import { useGetUsersQuery, useLazySearchUsersByCategoryQuery, useSearchUsersQuery } from "@/services/search/get-users";
import { Button } from "@/components/ui/button";
import { Forward, ForwardIcon } from "lucide-react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const ListOfConsultants = () => {
    const [pageNo, setPageNo] = useState(1);
    const keyword = useSelector(({ users }: any) => users?.keyword);
    const { data: usersList, isLoading, isError }: any = useGetUsersQuery({ page_no: pageNo }) || {};
    const { data: searchedUsers }: any = useSearchUsersQuery({ keyword: keyword }) || {};
    const { data: searchedUsersByCategory, isLoading: categoryLoading, isSuccess: categorySuccess }: any = useLazySearchUsersByCategoryQuery() || {};

    const decrementMemo = useMemo(() => () => {
        setPageNo(pageNo - 1);
    }, [pageNo]);
    const incrementMemo = useMemo(() => () => {
        setPageNo(pageNo + 1);
    }, [pageNo]);

    let displayData;

    if (keyword !== "") {
        displayData = searchedUsers?.users || [];
    } else if (categorySuccess) {
        displayData = searchedUsersByCategory?.users || [];
    } else {
        displayData = usersList?.users?.data || [];
    }
    console.log(categorySuccess)

    return (
        <>
            <div className="w-full flex items-center gap-[14px] justify-start md:gap-0 md:justify-between flex-wrap pb-[75px] ">
                {!isError && !isLoading && displayData.length > 0 ? (
                    displayData.map(({ name, username, id, verification_status, profile_image }: any) => (
                        <Consultant profile_image={profile_image} name={name} username={username} verification_status={verification_status} id={id} key={id} />
                    ))
                ) : (
                    <p className="font-medium text-sm text-center text-gray-400 " >No users available</p>
                )}

                <div className={`mt-[30px] flex items-center ${displayData?.users?.next_page_url ? "justify-between" : "justify-start"} w-full md:w-[200px] md:mx-auto`}>
                    {displayData?.users?.prev_page_url &&
                        <div className="w-auto flex items-center justify-between gap-[4px]">
                            <IoMdArrowBack onClick={decrementMemo} size={23} className="cursor-pointer" />
                            <p className="font-medium text-sm">Prev</p>
                        </div>
                    }
                    {displayData?.users?.next_page_url &&
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
