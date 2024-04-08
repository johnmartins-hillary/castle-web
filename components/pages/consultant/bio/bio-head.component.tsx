import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaShareSolid } from "react-icons/lia";
const BioHead = () => {
    const socialMedia =[
        {
          icon:<FaLinkedin color="black" size={30} />,
           id:1
        },
        {
          icon:<FaInstagramSquare color="black" size={30} />,
           id:2
        },
        {
          icon:<FaSquareXTwitter color="black" size={30}  />,
           id:3
        },
        {
          icon:<FaFacebook color="black" size={30}  />,
           id:4
        },
    ]
    return ( 
        <>
        <div className="w-full flex items-center justify-between " >
        <div className=" w-1/2 flex-col  md:w-full flex items-center justify-between md:flex-row " >
            <div className="  w-full md:w-1/2 flex items-center justify-start gap-2 " >
                <p className=" font-bold text-sm" >Profile</p>
                <LiaShareSolid color="black" size={18} />
            </div>
            <div className=" w-full mt-2 md:mt-0 md:w-1/2" >
                <p className=" text-xs font-light text-left md:text-right md:text-sm " > Category: Leadership</p>
            </div>
        </div>

        <div className="w-1/2 flex items-center justify-center gap-1 md:hidden "  >
        {socialMedia.map(({icon,id})=>(
                  <div key={id} >
                    {icon}
                   </div>
                    ))}
             
        </div>
        </div>

        </>
     );
}
 
export default BioHead;