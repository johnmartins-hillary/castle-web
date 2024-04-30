"use client"
import { EditIcon, MenuIcon } from "@/components/icons/icons";
import Image from "next/image";
import { useState } from "react";
import UsernameModal from "./modals/name-modal.component";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useGetUserDetailsQuery, useGetUsersCategoriesQuery } from "@/services/user";
import { useSelector } from "react-redux";
import ProfilePicModal from "./modals/profile-pic-modal.component";
import { Skeleton } from "@/components/ui/skeleton";
const UserName = () => {
    const [pictureModal,setPictureModal] = useState(false)
    const {isLoading,isSuccess} = useGetUserDetailsQuery("")
    const [nameModal,setNameModal] = useState(false)
    const [openNav,setOpenNav] = useState(false)
    const name = useSelector(({userprofile}:any)=>userprofile.name)
    const username = useSelector(({userprofile}:any)=>userprofile.username)
    const {data:categories,isLoading:categoryLoading}:any = useGetUsersCategoriesQuery()
    const profile_image = useSelector(({userprofile}:any)=>userprofile.profile_image)
    // console.log(categories)
    return ( 
        <>
       <div className="w-full my-4" >

        <div className="w-full flex items-center justify-between" >


            <div className="w-[20%] md:w-[10%]" >
            {!isSuccess ? <Skeleton className=" w-[40.19px] h-[40.19px] rounded-full" /> : <>
            <div  className=" w-[40.19px] h-[40.19px] rounded-full flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey relative " >
            <Image className={`rounded-full object-cover ${profile_image ? 'w-full h-full' : 'w-auto h-auto'}`} src={  profile_image ? profile_image : '/images/user-icon.png'} width={34.84} height={17.42} alt="user-placeholder" onClick={()=>{setPictureModal(true)}}/>
        </div>
        <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" className={'absolute w-[22px] h-[22px]  top-[65px] left-[60px]  md:w-[35px] md:h-[35px] md:top-[50px] md:left-[70px] lg:left-[85px]  cursor-pointer'} onClick={()=>{setPictureModal(true)}}  />
            </>}
            </div>


            <div className=" w-[80%] flex items-center justify-start gap-1 md:w-[90%] " >
            {!isSuccess ? <Skeleton className="h-5 w-[130px]" /> :<><h3 className="font-normal text-[18px] md:text-xl lg:text-3xl " >{name ? name : "Your fullname"}</h3>
            <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" className={' w-[22px] h-[22px]   md:w-[35px] md:h-[35px] cursor-pointer '} onClick={()=>{setNameModal(true)}}  /></>}
            </div>

            {/* <div className=" flex w-[10%] items-center justify-center lg:hidden " >
            <MenuIcon  size={24} onClick={()=>{
                       setOpenNav(true)
            }} color={''} className="cursor-pointer w-[24px] h-[24px] "/>
        </div> */}

        </div>
        <div className="w-[60%] flex items-center justify-start mx-auto gap-[13px] mt-1 md:w-[80%]" >
            {!isSuccess ? 
            <>
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[60px]" />
            </> : <>
            <p onClick={()=>{setNameModal(true)}} className="font-light text-xs cursor-pointer " >{ username ? username :  "Add a Nickname"}</p>
                <div className="w-auto flex flex-1 items-center justify-start gap-2 " >
                { categories?.categories?.length > 0 ? categories?.categories?.slice(0,5)?.map(({category_title,id}:any)=>(
              <>
                <p key={id} onClick={()=>{setNameModal(true)}} className="font-light text-xs cursor-pointer truncate">{category_title} </p><hr/>
              </>
            )):    <p onClick={()=>{setNameModal(true)}} className="font-light text-xs cursor-pointer">Category</p>}
                </div>
         
            </>}
        </div>
     
       </div>
       <ProfilePicModal openModal={pictureModal} setOpenModal={setPictureModal} />
       <UsernameModal openModal={nameModal} setOpenModal={setNameModal} />
       <MainMobileMenu setShowModal={setOpenNav} showModal={openNav} />
        </>
     );
}
 
export default UserName;