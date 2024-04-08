import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CirclePlus } from "lucide-react";
const Portfolio = () => {
    return ( 
        <>
        <div className="w-full">
        <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-base" >Portfolio</p>
        <CirclePlus size={16} />
        </div>

        <div className="w-full flex items-center justify-between mt-5 gap-7 " >
        <div className="grid w-3/5 max-w-sm items-center gap-1.5">
        <label htmlFor="role" className="font-normal mt-3 mb-1 text-sm" >Role</label>
      <input type="text" id="role" placeholder="" className="w-full bg-light_grey rounded-2xl text-black p-2  outline-none " />
        </div>
        <div className=" w-2/5 max-w-sm grid items-center gap-1.5">
        <label htmlFor="year" className="font-normal mt-3 mb-1 text-sm text-left " >Year</label>
        <Select>
      <SelectTrigger className="w-full  outline-none border-none bg-light_grey rounded-2xl">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className=" bg-light_grey" >
        <SelectGroup className=" bg-light_grey" >
          <SelectLabel></SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        </div>


        <div className="w-full flex items-end justify-between mt-4 gap-4 " >
        
        <div className="grid w-3/5 max-w-sm items-center gap-1.5">
        <label htmlFor="role" className="font-normal mt-3 mb-1 text-sm" >Company/Organization</label>
      <input type="text" id="role" placeholder="" className="w-full bg-light_grey rounded-2xl text-black p-2  outline-none " />
        </div>

        <div className=" w-2/5 flex items-center justify-center ">
        <Button className="bg-primary_color rounded-xl py-4 text-white w-full " >
          Save
        </Button>
        </div>
        </div>

        </div>
        </>
     );
}
 
export default Portfolio;