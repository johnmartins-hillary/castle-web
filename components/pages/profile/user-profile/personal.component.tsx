import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Personal = () => {
    return (
        <>
            <div className="w-full mt-24">
                <div className="mb-1">
                    <p className="font-semibold text-left text-base">Personal</p>
                    <p className="font-light text-left text-sm mt-2">This information is not available to the public</p>
                </div>

                <div className="w-full mt-5">
                    <div className="w-full flex items-center justify-between gap-5">
                        <div className="w-1/2">
                            <input className="w-full mb-5 border-b-2 border-b-light_grey p-2 outline-none" />
                            <Label className="font-bold text-sm text-left">Email</Label>
                        </div>
                        <div className="w-1/2">
                            <Select>
                                <SelectTrigger style={{  outline: "none", border: "none", borderBottom: "2px solid #EFEFEF", borderRadius:"0px" }} className="w-full mb-5">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="bg-light_grey">
                                    <SelectGroup className="bg-light_grey">
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Label className="font-bold text-sm text-left">Gender</Label>
                        </div>
                    </div>


                    <div className="w-full flex items-center justify-between gap-5 mt-5 ">
                        <div className="w-1/2">
                            <input className="w-full mb-5 border-b-2 border-b-light_grey p-2 outline-none" />
                            <Label className="font-bold text-sm text-left">Date of Birth</Label>
                        </div>
                        <div className="w-1/2">
                            <Select>
                                <SelectTrigger style={{  outline: "none", border: "none", borderBottom: "2px solid #EFEFEF", borderRadius:"0px" }} className="w-full mb-5">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="bg-light_grey">
                                    <SelectGroup className="bg-light_grey">
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Label className="font-bold text-sm text-left">Country</Label>
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-between gap-5 mt-10 ">
                        <div className="w-1/2">
                            <Select>
                                <SelectTrigger style={{  outline: "none", border: "none", borderBottom: "2px solid #EFEFEF", borderRadius:"0px" }} className="w-full mb-5">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="bg-light_grey">
                                    <SelectGroup className="bg-light_grey">
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Label className="font-bold text-sm text-left">State</Label>
                        </div>

                        <div className="w-1/2 flex items-center justify-center " >
                    <Button className="bg-primary_color  rounded-xl py-4 text-white w-[107px] " >
                    Save
                    </Button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personal;
