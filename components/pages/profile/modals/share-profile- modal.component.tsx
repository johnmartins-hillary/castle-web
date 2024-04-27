"use client";
import Modal from "@/components/modal/modal.component";
import { useGetUserDetailsQuery } from "@/services/user";

const ShareProfileModal = ({ openModal, setOpenModal }: any) => {
  const { data } = useGetUserDetailsQuery("");

  const user = data?.user;
  const link = `https://carsle.com/consultant/${user?.id}/${encodeURIComponent(
    user?.name
  )}`;
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div className="bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[auto] md:w-[655px] md:h-[654px] md:flex md:flex-col md:items-center md:justify-center lg:h-auto lg:py-[48px] relative ">
          <div className="w-full mt-[38px]">
            <p className="text-left text-[16px] font-bold left-[15px]">
              Share Profile
            </p>
          </div>
          <div className="w-full bg-black relative mt-[18px] flex items-stretch rounded-[21px] justify-between ">
            <input
              defaultValue={link}
              disabled
              type="text"
              className="flex-[2] relative w-[235px] z-[1] bg-light_grey left-0 p-[12px] rounded-[21px]  "
            />
            <button
              onClick={() => {
                if (typeof navigator !== undefined) {
                  navigator.clipboard.writeText(link);
                }
              }}
              className="w-auto  text-center text-white sticky mx-[23px] "
            >
              Copy
            </button>
          </div>
          <div className="w-full flex items-center justify-end mt-[50px]">
            <button
              onClick={async () => {
                try {
                  if (typeof navigator !== undefined) {
                    await navigator.share({
                      title: "Share Profile",
                      url: link
                    });
                  }
                } catch (error) {
                  console.log("Error", error);
                }
              }}
              className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px]"
            >
              Share
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareProfileModal;
