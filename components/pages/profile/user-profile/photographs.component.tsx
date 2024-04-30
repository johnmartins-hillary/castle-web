import { Button } from "@/components/ui/button";
import { CirclePlus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import PhotoModal from "../modals/photo-modal.component";
import { useDeleteUserPhotoMutation, useGetUsersPhotosQuery } from "@/services/user";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css'
import { useToast } from "@/components/ui/use-toast";
const UserPhotographs = () => {
  const [openModal,setOpenModal] = useState(false);
  const {data:photos}:any = useGetUsersPhotosQuery()
  const [deletePhoto,{isLoading,isSuccess,error,isError}]:any = useDeleteUserPhotoMutation()
  const deleteHandler =(id:any)=>{
    deletePhoto({id})
  }

  const { toast } = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Photo Deleted"
      });
    } else if (isError) {
      toast({
        title: "Oops! Failed",
        description: `${
          error?.data?.message
            ? error?.data?.message
            : "Something went wrong"
        }`
      });
    }
  }, [isLoading]);
    return ( 
        <>
        <div className="w-full mt-8">
        <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-[15px]" >Photographs</p>
        <CirclePlus size={16} onClick={()=>{setOpenModal(true)}} />
        </div>
        <PhotoProvider >
        <div className="w-full flex items-center justify-start gap-3 flex-wrap" >
            {photos?.photos?.map(({id,image_url}:any)=>(
              <div className="relative" >
              <PhotoView  src={image_url} key={id} >
                <Image src={image_url} width={100} height={100} className=" rounded-[12px]  h-[100px]" key={id} alt={`user-photo${id}`}  />
                </PhotoView>
                <div className="absolute top-3 right-2" >
                <Trash2 color="red" cursor={'pointer'} size={13}  onClick={()=>{deleteHandler(id)}} />
                </div>
                </div>
            ))}
        </div>
        </PhotoProvider>
        </div>
        <PhotoModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
     );
}
 
export default UserPhotographs;