const BioData = () => {
    const data = [ "Chief Executive Officer at The Val Okafor Company",
    "Global Change Ambassador at Inspiring Youths Africa Magazine & Awards",
    "Programs Officer at GOTNI Leadership Centre",
    "2023 Innovative Young Africans Awardee at International Internship University - IIU",
    "Official member at International Model United Nations",
    "Communications Lead at Angel of Hope Empowerment Foundation",
    "Fellow at YALI Regional Leadership Center West Africa",
    "2020 Hundred Most Influential Young People Awardee at Opportunities Hub",
    "Fellow at African ChangeMakers Initiative - #ACi",
    "Studied at University of Nigeria, Nsukka",
    "Lives in Abuja, Nigeria"]
    return ( 
        <>
        <div className="w-full mt-9 px-5 " >
            <ul className="w-full p-0 " >
                {data.map((item)=>(
                    <li className="  text-xs md:text-sm list-disc font-light mb-2 " key={item} >{item}</li>
                ))}
            </ul>
        </div>
        </>
     );
}
 
export default BioData;