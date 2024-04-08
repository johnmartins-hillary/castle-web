import { Button } from "@/components/ui/button";

const SearchView = () => {
  return (
    <div className="w-full items-center justify-end mt-4 flex">
      <div className=" w-[541px] flex items-stretch justify-between bg-light_grey rounded-lg ">
        <input
          type="text"
          className=" w-3/4 outline-none  border-none text-primary_color bg-none bg-transparent p-3 "
        />
        <Button className=" w-3/12 bg-primary_color  rounded-lg rounded-bl-none h-full py-4 ">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchView;
