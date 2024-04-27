"use client"
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaShareSolid } from "react-icons/lia";
import { useParams, } from "next/navigation";
import Link from "next/link"
import { useGetSingleUserQuery } from "@/services/search/get-users";
// import { useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
const BioHead = () => {
  const params = useParams<any>();
    const {data,isLoading,isSuccess}:any = useGetSingleUserQuery({id:params?.index?.[0]})
    const categories = data?.category
    const socialLinks = data?.social
    const socialMedia =[
        {
          icon:<FaLinkedin color="black" size={30} />,
          name:"linkedIn",
           id:1
        },
        {
          icon:<FaInstagramSquare color="black" size={30} />,
          name:"instagram",
           id:2
        },
        {
          icon:<FaSquareXTwitter color="black" size={30}  />,
          name:"twitter",
           id:3
        },
        {
          icon:<FaFacebook color="black" size={30}  />,
          name:"facebook",
           id:4
        },
    ]
    return ( 
        <>
        <div className="w-full flex items-start  md:items-center justify-between " >
        <div className=" w-1/2 flex-col  md:w-full flex items-center justify-between md:flex-row " >
            <div className="  w-full md:w-1/2 flex items-center justify-start gap-2 " >
                <p className=" font-bold text-sm" >Profile</p>
                <LiaShareSolid color="black" size={18} />
            </div>
            <div className=" w-full mt-[20px] md:mt-0 md:w-1/2" >
                <div className="w-auto flex items-center justify-start gap-1 " >
                {!isSuccess ? <Skeleton className=" w-[94px] h-[13px] rounded-none " />  : <p className=" text-xs font-light text-left md:text-right md:text-sm " > Category:</p>}
                { categories?.map(({category_title,id}:any,index:number)=>(
               <div key={id} className="flex items-center justify-between gap-2 "><p className=" text-[11px] md:text-xs " >{category_title}</p>{categories?.length !== index+1 && <hr className=" w-[2px] h-[13px] bg-black" />}</div>
                ))}
                </div>
            </div>
        </div>

        <div className="w-1/2 flex items-center justify-center gap-1 md:hidden "  >
       
             

             {socialLinks?.map(({platform,url}:any)=>(
              <>
               {socialMedia?.filter((item)=>item.name === platform)?.map(({icon,id})=>(
                  <Link href={url} target="_blank" key={id} >
                    {icon}
                   </Link>
                    ))}
              </>
             ))}
        </div>
        </div>

        </>
     );
}
 
export default BioHead;