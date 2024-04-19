import { Button } from "@/components/ui/button";
import { searchUsersHandler } from "@/redux/slices/users";
import { useSearchUsersQuery } from "@/services/search/get-users";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchView = () => {
  const keyword = useSelector(({users}:any)=>users?.keyword)
  const {} = useSearchUsersQuery({keyword:keyword})
  const dispatch = useDispatch()
const handleSubmit=()=>{
  dispatch(searchUsersHandler(keyword))
}
  return (
    <div className="w-full items-stretch justify-end mt-4 flex">
      <div className=" w-[541px] flex items-stretch justify-between bg-light_grey rounded-[27px] md:rounded-lg ">
        <input
        value={keyword}
        onChange={({target})=>{
       dispatch(searchUsersHandler(target.value))
        }}
          type="text"
          className=" w-[70%] md:w-3/4 outline-none py-[12px] px-[23px]  border-none text-primary_color bg-none bg-transparent md:p-3 "
        />
        <Button onClick={handleSubmit} className=" w-[30%] md:w-3/12 bg-primary_color text-[14px]  rounded-full rounded-bl-none h-full py-2 md:py-4 ">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchView;
