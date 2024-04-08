"use client";
import { Modal } from '@milon27/react-modal';
import '@milon27/react-modal/dist/style.css';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { CloseIcon } from '../icons/icons';
interface Props{
    showModal?:boolean | any,
    setShowModal?:any
}
const LandingPageMenu = ({showModal,setShowModal}:Props) => {
    const router = useRouter();
    const routes = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" }
      ];

    return ( 
        <>
         <Modal
      show={showModal}
      className=" bg-white shadow-md rm-bg-white shadow-light_grey rounded-[18px] p-[13px] h-[365px] flex flex-1 flex-col items-center justify-center "
      bgStyleClassName="rm-bg-black-600 rm-bg-opacity-10"
      contentStyleClassName=' flex-flex_2 flex flex-col justify-between '
      onClose={() => {
        setShowModal(false)
        console.log("closing the modal");
      }}
    >

        <CloseIcon  color={'black'} className={'absolute z-10 right-3 top-[-20%]'} size={24}  onClick={()=>{setShowModal(false)}}/>
        <div className='w-full flex flex-1 mt-14 flex-col items-center justify-center ' >
        <Button     onClick={() => router.push("/auth/sign-in")} className=" bg-primary_color w-full rounded-[25px] mb-9 ">Sign Up</Button>
          <Button
            onClick={() => router.push("/auth/sign-up")}
            className={"border-primary_color w-full rounded-[25px] "}
            variant="outline"
          >
           Login
          </Button>
        </div>

        <div className="flex flex-1 items-end  w-full justify-center">
        <ul className="flex items-center justify-center gap-4">
          {routes.map(({ name }, index) =>
            <li
              key={index}
              className="font-light text-sm cursor-pointer  mx-2"
            >
              {name}
            </li>
          )}
        </ul>
      </div>

   
    </Modal>
        </>
     );
}
 
export default LandingPageMenu;