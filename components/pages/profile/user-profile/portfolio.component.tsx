"use client"
import { CirclePlus, Trash2 } from "lucide-react";
import PortfolioModal from "../modals/portfolio-modal.component";
import { useEffect, useState } from "react";
import { useDeleteUsersPortfoliosMutation, useGetUsersPortfoliosQuery } from "@/services/user";
import { dateFormatter } from "@/utilities/helpers";
import { useToast } from "@/components/ui/use-toast";
const Portfolio = () => {
  const [openModal,setOpenModal] = useState(false)
  const {data:portfolios}:any = useGetUsersPortfoliosQuery()
  const [deleteUsersPortfolios,{isLoading:deleting,isError:isDeleteError,isSuccess:deleteSuccess,error:deleteError}]:any = useDeleteUsersPortfoliosMutation()
  const {toast} = useToast()
  const handleDelete =(id:any)=>{
    deleteUsersPortfolios({id})
  }

  useEffect(()=>{
    if (deleteSuccess) {
        toast({
          title:'Portfolio deleted'
        })
    }

    else if (isDeleteError) {
      toast({
        title:"Oops! Failed",
        description:`${deleteError?.data?.message ? deleteError?.data?.message : 'Something went wrong' }`
      })
    }
  },[deleting,isDeleteError,deleteError,])
    return ( 
        <>
        <div className="w-full mt-5 ">
        <div className=" flex items-center justify-start gap-2 " >
        <p className=" font-light text-left text-[15px]" >Portfolio</p>
        <CirclePlus onClick={()=>{setOpenModal(true)}} size={16} />
        </div>

          <div className="w-full mt-2" >
              {portfolios?.portfolios?.map(({role,company,start,endDate,still_works_there,id}:any)=>(
                <div key={id} className="w-full mt-[12px]" >
                  <p className="font-bold text-[14px] text-primary_color" >{role}</p>
                  <p className="font-bold text-[13px] text-gray-500" >@{company}</p>
                 <div className="w-auto md:justify-start md:gap-4 flex items-center justify-between" >
                 <p className="font-normal text-[13px] text-gray-500"> Started from  {dateFormatter(start)} - {still_works_there === "0" ? dateFormatter(endDate) : "present" } </p>
                 <Trash2 color="red" cursor={'pointer'} size={13} onClick={()=>handleDelete(id)}  />
                 </div>
                </div>
              ))

}
          </div>

        </div>
        <PortfolioModal openModal={openModal} setOpenModal={setOpenModal}  />
        </>
     );
}
 
export default Portfolio;