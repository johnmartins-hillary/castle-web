import { Button } from "@/components/ui/button";

const SearchView = () => {
  return (
    <div className="w-full items-center justify-end mt-4 flex">
      <div className=" w-[541px] flex items-stretch justify-between bg-light_grey rounded-[27px] md:rounded-lg ">
        <input
          type="text"
          className=" w-[70%] md:w-3/4 outline-none  border-none text-primary_color bg-none bg-transparent md:p-3 "
        />
        <Button className=" w-[30%] md:w-3/12 bg-primary_color text-[14px]  rounded-full md:rounded-lg rounded-bl-none h-full py-2 md:py-4 ">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchView;
