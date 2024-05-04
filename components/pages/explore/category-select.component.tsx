import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useGetCategoryListQuery } from "@/services/category";
import { useLazySearchUsersByCategoryQuery } from "@/services/search/get-users";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "react-select";
const SelectCategory = ({setConsulants}:any) => {
  const [category_list, setCategorylist] = useState<any>();
  const { data: category_list_data }: any = useGetCategoryListQuery();
  const [trigger,{data,isSuccess,isLoading,isFetching}]:any = useLazySearchUsersByCategoryQuery()
  useEffect(() => {
    const formattedCategries = category_list_data?.categories?.map(
      (category: any) => ({
        label: category.category_name,
        value: category.category_name?.toLowerCase()
      })
    );

    setCategorylist(formattedCategries);
  }, [category_list_data]);
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      background: "none",
      border: "none",
      // borderRadius: 21,
      padding: 0
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    }),
    dropDown:(provided:any)=>({
    ...provided,
          width: 227,
    
    })
  };

  useEffect(()=>{
    setConsulants(data?.users)
  },[isFetching])

  return (
    <div className=" w-full my-14 flex items-center justify-between gap-2 px-[12px] md:px-0 ">
      <div className=" w-1/2 md:hidden">
        <p className=" text-left text-[13px] md:text-lg font-bold md:hidden">
          Explore
        </p>
      </div>
      <div className=" w-1/2 md:w-full flex items-center justify-end">
        {/* <p className=" text-[13px] md:text-lg font-light">Cat∏egories</p>
        <ChevronDown className=" cursor-pointer" /> */}
           {/* <Select
                styles={customStyles}
                onChange={({ label, value }: any) => {
                  trigger({cat:value});
                }}
                options={category_list}
              /> */}

              <DropdownMenu  >
                <DropdownMenuTrigger style={{outline:"none",border:"none"}} className="flex items-center justify-start gap-[6px]  text-[13px] md:text-lg" >Categories   <ChevronDown className=" cursor-pointer" /></DropdownMenuTrigger>
                <DropdownMenuContent style={{right:"16px"}} className="w-[225px] relative rounded-[16px] border-black border right-[16px]" >
                  {/* <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem> */}

                  {category_list?.map(({label,value}:any)=>(
                       <DropdownMenuItem key={value} onClick={()=>{
                        trigger({cat:value});
                       }} >{label}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
      </div>
       
    </div>
  );
};

export default SelectCategory;
