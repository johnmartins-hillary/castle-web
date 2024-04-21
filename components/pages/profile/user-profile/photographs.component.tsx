import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PhotoModal from "../modals/photo-modal.component";
import { useGetUsersPhotosQuery } from "@/services/user";

const UserPhotographs = () => {
  const [openModal,setOpenModal] = useState(false);
  const {data:photos,isLoading,isSuccess}:any = useGetUsersPhotosQuery()
    return ( 
        <>
        <div className="w-full mt-8">
        <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-[15px]" >Photographs</p>
        <CirclePlus size={16} onClick={()=>{setOpenModal(true)}} />
        </div>
        <div className="w-full flex items-center justify-start gap-3" >
            {photos?.photos?.map(({id,image_url}:any)=>(
                <Image src={image_url} width={100} height={100} className=" rounded-[12px]" key={id} alt={`user-photo${id}`}  />
            ))}
        </div>
        </div>
        <PhotoModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
     );
}
 
export default UserPhotographs;