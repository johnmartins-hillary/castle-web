const AboutUs = () => {
    const options=["Who we are","Privacy policy"]
    return ( 
        <>
        <div className="w-full mt-14" >
        <p className="font-medium text-[13px] md:text-lg text-left">About Us</p>
        <div className="w-full flex items-center justify-start gap-4 mt-5 "  >
            {options.map((item)=>(
                <p className=" text-[13px] md:text-sm underline font-norma" key={item} >{item}</p>
            ))}
        </div>
        </div>
        </>
     );
}
 
export default AboutUs;