import Image from "next/image";

const YourCirlceBanner = () => {

    return (  
        <>
        <div className="w-full flex flex-col items-center justify-between rounded-xl bg-primary_color mt-14 md:flex-row " >
            <div className=" w-full p-[12px] flex justify-start items-center gap-2 md:w-2/5 md:p-14 " >
                <Image src={'/images/user-add-icon.png'} alt="user-icon"  width={45} height={45} className=" w-[30px] h-[30px] md:w-[45px] md:h-[45px]" />
                <p className=" text-white text-sm   md:text-base font-light" >Your Circle</p>
            </div>
            <div className=" w-full p-[12px] md:p-0 md:w-3/5" >
                <p className="text-start font-light text-white text-xs leading-6 md:text-base " >Your circle comprises of people you <br className="hidden md:block" /> admire and regularly reach out to.</p>
            </div>
        </div>

        <div className="w-full mt-5  flex justify-start items-center gap-2 md:mt-10 " >
        <Image src={'/images/exclamation-icon.png'} alt="exclamation-icon" width={45} height={45} className=" hidden md:block md:w-[45px] md:h-[45px]" />   <p className="text-start font-light text-primary_color text-xs md:text-center md:text-base" >Click on verified user’s profile to add them to your circle</p>
        </div>
        </>
    );
}
 
export default YourCirlceBanner;