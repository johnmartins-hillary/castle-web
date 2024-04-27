import { useGetCategoryListQuery } from "@/services/category";
import { useLazySearchUsersByCategoryQuery } from "@/services/search/get-users";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "react-select";
const SelectCategory = () => {
  const [category_list, setCategorylist] = useState<any>();
  const { data: category_list_data }: any = useGetCategoryListQuery();
  const [trigger] = useLazySearchUsersByCategoryQuery()
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
      width: "100%",
      padding: 0
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    })
  };

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
           <Select
                styles={customStyles}
                onChange={({ label, value }: any) => {
                  trigger({cat:value});
                }}
                options={category_list}
              />
      </div>
       
    </div>
  );
};

export default SelectCategory;
