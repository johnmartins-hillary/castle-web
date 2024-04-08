import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineEdit } from "react-icons/md";
import { IoLogOutOutline,IoClose } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from 'react-icons/hi2';
import { FaMicrophone } from 'react-icons/fa';
import { PiLinkSimpleLight } from "react-icons/pi";
import { Ban } from 'lucide-react';
import { CiFaceSmile, CiMenuBurger } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi";

export const GoogleIcon = ({ size, color, className, onClick }) => {
    return <FcGoogle size={size} color={color} className={className} onClick={onClick} />
}
export const EditIcon = ({ size, color, className, onClick }) => {
    return <MdOutlineEdit size={size} color={color} className={className} onClick={onClick} />
}
export const LogoutIcon = ({ size, color, className, onClick }) => {
    return <IoLogOutOutline size={size} color={color} className={className} onClick={onClick} />
}
export const CheckIcon = ({ size, color, className, onClick }) => {
    return <IoIosCheckmarkCircle size={size} color={color} className={className} onClick={onClick} />
}
export const SpeakeronIcon = ({ size, color, className, onClick }) => {
    return <HiMiniSpeakerWave size={size} color={color} className={className} onClick={onClick} />
}
export const SpeakeroffIcon = ({ size, color, className, onClick }) => {
    return <HiMiniSpeakerXMark size={size} color={color} className={className} onClick={onClick} />
}
export const MicIcon = ({ size, color, className, onClick }) => {
    return <FaMicrophone size={size} color={color} className={className} onClick={onClick} />
}
export const LinkIcon = ({ size, color, className, onClick }) => {
    return <PiLinkSimpleLight size={size} color={color} className={className} onClick={onClick} />
}
export const BanIcon = ({ size, color, className, onClick }) => {
    return <Ban size={size} color={color} className={className} onClick={onClick} />
}
export const SmileIcon = ({ size, color, className, onClick }) => {
    return <CiFaceSmile size={size} color={color} className={className} onClick={onClick} />
}
export const MenuIcon = ({ size, color, className, onClick }) => {
    return <CiMenuBurger size={size} color={color} className={className} onClick={onClick} />
}
export const CloseIcon = ({ size, color, className, onClick }) => {
    return <TfiClose size={size} color={color} className={className} onClick={onClick} />
}
