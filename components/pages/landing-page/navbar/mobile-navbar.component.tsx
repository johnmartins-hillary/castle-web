"use client";
import { MenuIcon } from "@/components/icons/icons";
import MainMobileMenu from "@/components/mobile-menus/main-mobile-menu";
import { useGetNotificationsQuery } from "@/services/notifications";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface Props {
  title?: string;
  icon?: any;
  iconStyles?:string
}
const MobileNavbar = ({ title, icon,iconStyles }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { data: notificationData }: any = useGetNotificationsQuery();
  const notifications = notificationData?.notifications?.data;
  const unread = notifications?.filter(
    (item: any) => item?.status === "unread"
  );
  const router = useRouter();
  return (
    <>
      <div className=" flex items-center justify-between pt-[1px] pb-[1px] md:pt-[13px]  w-full ">
        <div
          className={`w-1/2 hidden md:flex items-center justify-start gap-2 ${
            title || icon ? "flex" : "hidden"
          } `}
        >
            <div className={iconStyles} >
            {icon}
            </div>
          <p className="text-lg font-bold">{title}</p>
        </div>
        <div className=" items-center hidden md:flex justify-center lg:hidden ">
          <MenuIcon
            color={"black"}
            size={24}
            onClick={() => {
              setShowModal(true);
            }}
            className="cursor-pointer w-[24px] h-[24px] "
          />
        </div>
        <div className=" flex flex-1 items-center justify-end gap-4 md:hidden ">
          <div className="w-auto relative">
            <Image
              onClick={() => {
                router.push("/notifications");
              }}
              width={26}
              height={26}
              src={"/images/bell-icon.png"}
              alt="notification-icon"
            />
            {unread?.length > 0 && unread !== undefined && (
              <div className=" bg-red-600 absolute w-[8px] h-[8px] rounded-[8px] top-[2px] right-[3px] " />
            )}
          </div>
          <Image
            onClick={() => {
              router.push("/settings");
            }}
            width={26}
            height={26}
            src={"/images/setting-icon.png"}
            alt="setting-icon"
          />
        </div>
      </div>
      <MainMobileMenu setShowModal={setShowModal} showModal={showModal} />
      {/* </div> */}
    </>
  );
};

export default MobileNavbar;
