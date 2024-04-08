import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";
interface Props {
  width?: any;
  className?: string;
  height?: any;
}
const AvatarWithBadge = ({ width, height, className }: Props) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Image
        src={"/images/user-image.png"}
        className={className ? className : "m-auto object-contain aspect-auto "}
        alt="consultant"
        width={width ? width : 100}
        height={height ? height : 100}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "0%",
          transform: "translateY(-50%)"
        }}
      >
        <RiVerifiedBadgeFill color="#3897F0" size={20} />
      </div>
    </div>
  );
};

export default AvatarWithBadge;
