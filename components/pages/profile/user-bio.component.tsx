import Image from "next/image";

const UserBio = () => {
    return ( 
        <>
        <div className="w-full mt-14" >

        <div className=" mb-1 flex items-center justify-start gap-2 " >
        <p className=" font-semibold text-left text-lg" >Bio</p>
        <Image width={35} height={35} src={'/images/edit-icon.png'} alt="edit-icon" />
        </div>

        <div className="w-full" >
            <p  className="font-light text-sm cursor-pointer text-left ">Business Leader (Techpreneur)|| Clean Energy Enthusiast || SDGs Advocate || Social impact Strategist</p>
        </div>
        </div>
        
        </>
     );
}
 
export default UserBio;