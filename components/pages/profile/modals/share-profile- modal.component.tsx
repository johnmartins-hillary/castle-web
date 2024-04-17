"use client"
import Modal from "@/components/modal/modal.component"

const ShareProfileModal = ({ openModal, setOpenModal }: any) => {
    return (
        <>
            <Modal open={openModal}>
                <div className="bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[416px] relative">
                    <div className="w-full mt-[38px]">
                        <p className="text-left text-[16px] font-bold left-[15px]">Share Profile</p>
                    </div>
                 <div className="w-full relative mt-[18px] flex items-center justify-between " >
                    <input type="text" className="flex-1 absolute w-[235px] z-10 bg-light_grey left-0 " />
                    <button className="w-auto bg-black text-center text-white" >
                        Copy
                    </button>
                 </div>
                    <div className="w-full flex items-center justify-end mt-[50px]">
                        <button onClick={() => { setOpenModal(false) }} className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px]">
                            Share
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ShareProfileModal;
