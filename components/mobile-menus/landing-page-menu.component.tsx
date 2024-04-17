"use client";
// import { Modal } from '@milon27/react-modal';
// import '@milon27/react-modal/dist/style.css';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { CloseIcon } from '../icons/icons';
import Modal from '../modal/modal.component';
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
         open={showModal}
         onClose={()=>{
          setShowModal(false)
         }}
    >

        <div className=" bg-white shadow-[#00000040] shadow-lg z-20 rounded-[18px] p-[13px] h-[365px] w-[392px] flex flex-col items-center justify-center ">
        <CloseIcon  color={'black'} className={'absolute z-10 right-[34px] top-[71px]'} size={24}  onClick={()=>{setShowModal(false)}}/>
        <div className='w-full flex flex-[3] mt-14 flex-col items-center justify-center ' >
        <Button     onClick={() => router.push("/auth/sign-up")} className=" bg-primary_color w-full rounded-[25px] mb-3 ">Sign Up</Button>
          <Button
            onClick={() => router.push("/auth/sign-in")}
            className={"border-primary_color w-full rounded-[25px] "}
            variant="outline"
          >
           Login
          </Button>
        </div>

        <div className="flex flex-[0.5] items-end  w-full justify-center">
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
        </div>

   
    </Modal>
        </>
     );
}
 
export default LandingPageMenu;