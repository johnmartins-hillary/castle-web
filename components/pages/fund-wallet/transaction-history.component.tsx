import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import TransactionTable from "./transaction-table.component";
const TransactionHistory = () => {
    return ( 
        <>
        <div className="w-full mt-16" >
            <div className="w-full my-4" >
                <p className="text-base font-bold text-left" >Transaction History</p>
            </div>
            <div className="w-full flex items-center justify-start gap-3" >
            <Select  >
      <SelectTrigger className="w-[189px]  outline-none border-none bg-light_grey rounded">
        <SelectValue placeholder="Month" />
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
            <Select  >
      <SelectTrigger className="w-[189px]  outline-none border-none bg-light_grey rounded">
        <SelectValue placeholder="Year" />
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

            <TransactionTable/>
        </div>
        </>
     );
}
 
export default TransactionHistory;