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
              className ? className : "m-auto object-contain aspect-auto "
            }
            alt="consultant"
            width={width ? width : 100}
            height={height ? height : 100}
          />
        : <div className=" w-14 h-14 rounded-full flex items-center justify-center bg-faint_grey  shadow-md shadow-faint_grey">
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
