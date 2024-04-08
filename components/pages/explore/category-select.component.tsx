import { ChevronDown } from "lucide-react";

const SelectCategory = () => {
  return (
    <div className=" w-full my-14 flex items-center justify-end gap-2 ">
      <p className=" text-base md:text-lg font-light">Categories</p>
      <ChevronDown className=" cursor-pointer" />
    </div>
  );
};

export default SelectCategory;
