import Image from "next/image";

const DashboardBanner = () => {

    return (  
        <>
        <div className="w-full flex items-stretch justify-between rounded-xl bg-primary_color " >
            <div className=" w-3/5 py-[40px] px-[23px] md:p-14  md:max-lg:w-[70%] " >
                <p className=" text-white  text-xs font-light  md:max-lg:text-xl lg:text-2xl "  >Want to make more valuable<br/>connections today?</p>
            </div>
            <div className="w-2/5" >
                <Image src={'/images/banner-image.png'} height={187} width={548} alt="banner-image" className=" object-cover h-full flex-1 "  />
            </div>
        </div>

        <div className="w-full mt-4  md:max-lg:w-[30%" > 
            <p className="text-center text-xs font-light text-primary_color md:text-lg" >Visit the <span className="font-bold capitalize md:font-light md:lowercase" >explore page </span>and search by categories</p>
        </div>
        </>
    );
}
 
export default DashboardBanner;