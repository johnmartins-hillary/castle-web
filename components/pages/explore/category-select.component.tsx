import { ChevronDown } from "lucide-react";

const SelectCategory = () => {
  return (
    <div className=" w-full my-14 flex items-center justify-between gap-2 px-[12px] md:px-0 ">
      <div className=" w-1/2 md:hidden">
        <p className=" text-left text-[13px] md:text-lg font-bold md:hidden">
          Explore
        </p>
      </div>
      <div className=" w-1/2 md:w-full flex items-center justify-end">
        <p className=" text-[13px] md:text-lg font-light">Categories</p>
        <ChevronDown className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default SelectCategory;
