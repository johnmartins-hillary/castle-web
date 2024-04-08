import { EditIcon, MenuIcon } from "@/components/icons/icons";
import Image from "next/image";

const UserName = () => {
    return ( 
        <>
       <div className="w-full my-4" >
       <div className="w-full mb-7 flex items-center justify-start gap-10 md:mx-lg:items-center "  >
    <div  className=" w-14 h-14 rounded-full flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey relative " >
            <Image src={'/images/user-icon.png'} width={34.84} height={17.42} alt="user-placeholder" />
            <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" className={'absolute z-10 top-7 -right-5'} />
        </div>
        <div  className="flex flex-col flex-1"  >
        <div className="flex w-full" >
            <h3 className="font-normal text-3xl md:max-lg:text-xl " >Emmanuel Eze</h3>
            <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" />
        </div>
        <div className="w-full flex items-center justify-start gap-10 mt-1" >
            <p className="font-light text-xs cursor-pointer " >Add a Nickname</p>
            <p className="font-light text-xs cursor-pointer">Category</p>
        </div>
        </div>
        <div className=" flex items-center justify-center lg:hidden " >
            <MenuIcon  size={24} onClick={()=>{}} color={''} className="cursor-pointer w-[24px] h-[24px] "/>
        </div>
        </div>


     
       </div>
        </>
     );
}
 
export default UserName;