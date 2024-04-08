"use client";
import { Modal } from '@milon27/react-modal';
import '@milon27/react-modal/dist/style.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChatOption, Counter } from './consult-drawer.component';
import { CloseIcon } from '@/components/icons/icons';
import { useDrawer } from '@/context/drawer-context';
interface Props{
    showModal?:boolean | any,
    setShowModal?:any
}
const ConsultMobileMenu = ({showModal,setShowModal}:Props) => {
    const { openDrawer, setOpenDrawer } = useDrawer();
 
    return ( 
        <>
         <Modal
      show={openDrawer}
      className=" bg-white rm-bg-white shadow-md shadow-light_grey rounded-[18px] p-[3px]  flex flex-1 flex-col items-center justify-center "
      bgStyleClassName="rm-bg-black-600 rm-bg-opacity-10"
      
      contentStyleClassName=' flex-flex_2 flex w-full flex-col justify-between bg-white p-[23px] '
      onClose={() => {
        setShowModal(false)
        console.log("closing the modal");
      }}
    >

        <CloseIcon color={'black'}  className={'absolute z-10 right-3 top-[-10%]'} size={24}  onClick={()=>{setOpenDrawer(false)}}/>
     

        <div className="w-full mb-5 ">
          <p className=" text-center font-bold text-base">Consult: Val Okafor</p>
        </div>
        <div className="mb-9 p-3 py-6 rounded-md border-primary_color border w-56 m-auto ">
          <p className=" text-center font-semibold text-base">
            NGN 200 per minute
          </p>
        </div>
        <div className=" w-full mb-5 ">
          <p className=" text-center font-normal text-[13px]">
            How many minutes would you like to consult Val for?
          </p>
        </div>
        <Counter />
        <div className="w-full mb-5 ">
          <p className=" text-center font-bold text-lg">Bill: NGN 6, 000</p>
        </div>
        <ChatOption />
    </Modal>
        </>
     );
}
 
export default ConsultMobileMenu;