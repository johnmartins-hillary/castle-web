import AvatarWithBadge from "@/components/avatar/avatar.component";
import { useRouter } from "next/navigation";

interface Props {
    name?: string;
    username?: string;
    verification_status?: string;
    profile_image?: string;
    id?: number;
}

const Consultant = ({ name, username, id, verification_status, profile_image }: Props) => {
    const router = useRouter();

    // Check if name or username is provided, otherwise use an empty string
    const displayName = name ? name : username ? username : "";

    return (
        <div onClick={() => { router.push(`/consultant/${id}/${encodeURIComponent(displayName)}`) }} className="w-[30%] md:w-1/5 mb-10 relative flex flex-col items-center justify-center cursor-pointer">
            <AvatarWithBadge className="w-[65px] h-[65px] rounded-[65px] md:w-[90px] md:h-[90px] md:rounded-[90px] lg:w-[85px] lg:h-[85px] lg:rounded-[85px]" profile_image={profile_image} isVerified={verification_status === "0" ? false : true} width={65} height={65} />
            <p className="text-center text-xs font-medium mt-4">{displayName}</p>
        </div>
    );
}

export default Consultant;
