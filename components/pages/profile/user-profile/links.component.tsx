
import { CirclePlus, Edit2, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import LinksModal from "../modals/links-modal.component";
import {
  useDeleteUsersLinkMutation,
  useGetUsersLinksQuery
} from "@/services/user";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import EditlinksModal from "../modals/edit-link-modal.component";
const Links = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { data: links, isLoading }: any = useGetUsersLinksQuery();
  const [
    deleteUsersLink,
    {
      isLoading: deleting,
      isError: isDeleteError,
      isSuccess: deleteSuccess,
      error: deleteError
    }
  ]: any = useDeleteUsersLinkMutation();
  const { toast } = useToast();

  useEffect(() => {
    if (deleteSuccess) {
      toast({
        title: "Link Deleted"
      });
    } else if (isDeleteError) {
      toast({
        title: "Oops! Failed",
        description: `${
          deleteError?.data?.message
            ? deleteError?.data?.message
            : "Something went wrong"
        }`
      });
    }
  }, [deleting, isDeleteError, deleteError, deleteSuccess]);
  const handleDelete = (id: any) => {
    deleteUsersLink({ id });
  };
  return (
    <>
      <div className="w-full mt-8 ">
        <div className=" mb-1 flex items-center justify-start gap-2 ">
          <p className=" font-light text-left text-[15px]">Links</p>
          <CirclePlus
            onClick={() => {
              setOpenModal(true);
            }}
            size={16}
          />
        </div>
        {links?.links?.map(({ platform, url, id }: any) => (
          <div key={id} className="w-full mt-[12px]">
            <p className="font-bold text-[14px] text-primary_color">{platform}</p>
            <div className="w-auto flex items-center justify-between md:justify-start gap-4">
              <Link
                target="_blank"
                href={url}
                className="font-light text-[13px] text-gray-500 underline truncate w-[290px] "
              >
                {url}
              </Link>
            </div>
            <div className="mt-[5px] flex items-center justify-start gap-[5px] " >
                 <Edit2 color="green"
                size={13}
                cursor={"pointer"}
                onClick={()=>{
                  setOpenEdit(true)
                }}
               />
                 <Trash2 color="red" cursor={'pointer'} size={13} onClick={()=>handleDelete(id)}  />
                 </div>
            <EditlinksModal openModal={openEdit} setOpenModal={setOpenEdit} url={url} text={platform} id={id} />
          </div>
           
        ))}
      </div>
      <LinksModal openModal={openModal} setOpenModal={setOpenModal} />
 
    </> 
  );
};

export default Links;
