import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Url = () => {
    return ( 
        <>
       <div className="w-full mt-10">
       <label htmlFor="url" className="font-normal mt-3  text-sm" >Url</label>
        <input  id="url" className="w-full bg-light_grey rounded-2xl text-black p-2  outline-none " />
        <div className="w-full mt-5 flex items-center justify-end " >
                    <Button className="bg-primary_color  rounded-xl py-4 text-white w-[107px] " >
                    Save
                    </Button>
                    </div>
        </div>
        </>
     );
}
 
export default Url;