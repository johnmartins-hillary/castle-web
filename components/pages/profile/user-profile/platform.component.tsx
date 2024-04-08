import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
const Platform = () => {
    return ( 
        <>
         <div className="w-full">
         <label htmlFor="platform" className="font-normal mt-3 text-sm" >Platform</label>
        <Select  >
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
        </>
     );
}
 
export default Platform;