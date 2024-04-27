import { useGetSingleUserQuery } from "@/services/search/get-users";
import {useSelector} from "react-redux"
import { useParams, } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
const BioData = () => {
    // const portfolios = useSelector(({singleUser}:any)=>singleUser?.data?.portfolio)
    const params = useParams<any>();
    const {data,isSuccess}:any = useGetSingleUserQuery({id:params?.index?.[0]})
    const portfolios = data?.portfolio
    return ( 
        <>
        <div className={`w-full mt-9 ${!isSuccess ? 'px-0' : 'px-5'} `} >
                {!isSuccess ? <>
                    {[0,1,2,3,4,5,6,7,8,9].map((index)=>(
                        <Skeleton  key={index} className=" w-full md:w-[200px] h-[15px] rounded-none mb-[10px]"  />
                    ))}
                </> :            
               
                <ul className="w-full p-0 " >
                {portfolios.map(({role,company,id}:any)=>(
                    <li className="  text-xs md:text-sm list-disc font-light mb-2 " key={id} >{role} at {company}</li>
                ))}
            </ul>}
        </div>
        </>
     );
}
 
export default BioData;