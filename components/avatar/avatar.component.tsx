import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";
interface Props {
  width?: any;
  className?: string;
  profile_image?: string;
  height?: any;
  isVerified?: boolean;
}
const AvatarWithBadge = ({
  width,
  height,
  className,
  isVerified,
  profile_image
}: Props) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {profile_image
        ? <Image
            src={profile_image}
            className={
              className
                ? className
                : "m-auto object-contain aspect-auto  w-full h-full rounded-full "
            }
            alt="consultant"
            width={width ? width : 100}
            height={height ? height : 100}
          />
        : <div className="  w-[65px] h-[65px] rounded-[65px] md:w-[90px] md:h-[90px] md:rounded-[90px] lg:w-[85px] lg:h-[85px] lg:rounded-[85px] flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey">
            <Image
              src={"/images/user-icon.png"}
              width={34.84}
              height={17.42}
              alt="user-placeholder"
            />
          </div>}
      <div
        style={{
          position: "absolute",
          top: "12%",
          right: "-5%",
          transform: "translateY(-50%)"
        }}
      >
        {isVerified &&
          <RiVerifiedBadgeFill
            color="#3897F0"
            size={20}
            className="  size-[13px] md:size-[20px]"
          />}
      </div>
    </div>
  );
};

export default AvatarWithBadge;
