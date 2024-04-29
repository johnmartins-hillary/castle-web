import Image from "next/image";
import { useGetSingleUserQuery } from "@/services/search/get-users";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams} from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import 'react-photo-view/dist/react-photo-view.css'
import {PhotoProvider,PhotoView} from "react-photo-view"
const PhotoGraphs = () => {
  const params = useParams<any>();
  // const singleUser = useSelector(({singleUser}:any)=>singleUser?.data?.user)
  const {data,isLoading,isSuccess}:any = useGetSingleUserQuery({id:params?.index?.[0]})
  return (
    <div className="w-full m-auto md:w-[90%] lg:w-4/5 mt-8 md:mt-16">
      <div className="w-1/2 flex items-center justify-start">
        <p className=" font-bold text-sm">Photographs</p>
      </div>

      <PhotoProvider>
      <div className="w-full flex items-center justify-start gap-2  md:gap-2 mt-3 flex-wrap ">
        {!isSuccess && [0, 1, 2, 3, 4, 5].map(item =>
          <Skeleton
            key={item}
  
            className=" w-[118px] h-[26px]"
          />
        )}

        {isSuccess && data?.images?.map(({id,image_url}:any)=>(
         <PhotoView key={id} src={image_url} >
            <Image key={id}
          src={image_url}
          height={26}
          width={118}
          alt="photographs"
          className=" object-cover h-[100px] "/>
         </PhotoView>
        ))}
      </div>
      </PhotoProvider>
    </div>
  );
};

export default PhotoGraphs;
