import BioData from "./bio-data.component";
import BioHead from "./bio-head.component";

const Bio = () => {

    return ( 
        <>
        <div className=" w-full  mt-16 md:w-[90%] lg:w-4/5 md:m-auto md:mt-16 lg:mt-16" >
            <BioHead/>
            <BioData/>
            
        </div>
        </>
     );
}
 
export default Bio;