import { Button } from "@/components/ui/button";
import { Linkedin, UserRound, UsersRound, X } from "lucide-react";
import { RiFacebookLine, RiInstagramLine } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useGetSingleUserQuery } from "@/services/search/get-users";
import { useDrawer } from "@/context/drawer-context";
import Image from "next/image";
import { useSelector } from "react-redux";
import {
  useAddToCricleMutation,
  useIsInCircleQuery,
  useRemoveFromCricleMutation
} from "@/services/circle";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { getLocalStorageData } from "@/utilities/helpers";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
const Actions = ({ setOpenModal }: any) => {
  const { openDrawer, setOpenDrawer } = useDrawer();
  const singleUser = useSelector(
    ({ singleUser }: any) => singleUser?.data?.user
  );
  const [added, setAdded] = useState(false);
  const {
    data: isInCircleData,
    isLoading: checkingCircle,
    isSuccess: circleSuccess
  }: any = useIsInCircleQuery({ user_id: singleUser?.id });
  const [
    addToCricle,
    { isLoading, isError, isSuccess, data: circleData, error }
  ]: any = useAddToCricleMutation();
  const [
    removeFromCircle,
    {
      isLoading: removing,
      isError: IsRemoveError,
      isSuccess: removeSuccess,
      error: removeError,
      data: removeData
    }
  ]: any = useRemoveFromCricleMutation();
  const user = getLocalStorageData("user");
  const userId = user?.id;
  const params = useParams<any>();
  const { data, isSuccess: socialSuccess }: any = useGetSingleUserQuery({
    id: params?.index?.[0]
  });
  const socialLinks = data?.social;
  const { toast } = useToast();
  const isVerified = singleUser?.verification_status === "0" ? false : true;
  const token = Cookie.get("authorization");
  const router = useRouter();
  const socialMedia = [
    {
      icon: <FaLinkedin color="black" size={30} />,
      name: "linkedIn",
      id: 1
    },
    {
      icon: <FaInstagramSquare color="black" size={30} />,
      name: "instagram",
      id: 2
    },
    {
      icon: <FaSquareXTwitter color="black" size={30} />,
      name: "twitter",
      id: 3
    },
    {
      icon: <FaFacebook color="black" size={30} />,
      name: "facebook",
      id: 4
    },
    {
      icon: <FaYoutube color="black" size={30} />,
      name: "youtube",
      id: 4
    },
    {
      icon: <FaTiktok color="black" size={30} />,
      name: "tiktok",
      id: 4
    }
  ];

  useEffect(() => {
    if (isSuccess) {
      setAdded(true);
      toast({
        title: `Added to circle`
      });
    } else if (isError) {
      toast({
        title: "Oops!",
        description: `${
          error?.data?.message ? error?.data?.message : "Something went wrong"
        }`
      });
    }
    return () => {
      setAdded(false);
    };
  }, [isSuccess, isLoading, circleData, isError, error]);

  useEffect(() => {
    if (removeSuccess) {
      setAdded(false);
      toast({
        title: `${removeData?.message}`
      });
    } else if (IsRemoveError) {
      toast({
        title: "Oops!",
        description: `${
          removeError?.data?.message
            ? removeError?.data?.message
            : "Something went wrong"
        }`
      });
    }
    return () => {
      setAdded(false);
    };
  }, [removeSuccess, IsRemoveError, removeData, removing, removeError]);

  useEffect(() => {
    if (isInCircleData?.status) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [isInCircleData, checkingCircle, circleSuccess]);
  const handleAddtoCirlce = () => {
    addToCricle({ user_id: singleUser?.id });
  };
  const handleremoveFromCirlce = () => {
    removeFromCircle({ user_id: singleUser?.id });
  };
  const handleConsult = () => {
    if (token) {
      setOpenModal(true);
    } else {
    }
  };
  return (
    <>
      <div className=" w-full gap-4 m-auto mt-5 flex items-center  justify-between md:max-lg:w-[60%] lg:m-auto lg:w-3/5 ">
        {!socialSuccess ? (
          <Skeleton className="w-[33.33%] h-[11px] rounded-none " />
        ) : (
          singleUser?.id !== userId && (
            <div className=" flex-1 md:w-1/3 ">
              <>
                <Button
                  onClick={() => {
                    if (token) {
                      setOpenModal(true);
                    } else {
                      router.replace("/auth/sign-in");
                    }
                  }}
                  className=" w-full bg-primary_color py-3  rounded-[11px] text-white md:w-1/2  md:hidden md:max-lg:w-[119px] lg:w-full "
                >
                  Consult
                </Button>
                <Button
                  onClick={() => {
                    if (token) {
                      setOpenDrawer(true);
                    } else {
                      router.replace("/auth/sign-in");
                    }
                  }}
                  className=" w-full bg-primary_color py-3  rounded-[11px] text-white md:w-1/2  hidden md:block md:max-lg:w-[119px] lg:w-full "
                >
                  Consult
                </Button>
              </>
            </div>
          )
        )}
        {!socialSuccess ? (
          <Skeleton className="w-[33.33%] h-[11px] rounded-none " />
        ) : (
          <div className=" flex-flex_2 md:w-1/3 flex items-center justify-start gap-3 ">
            {singleUser?.id !== userId && added ? (
              <UsersRound
                onClick={handleremoveFromCirlce}
                color="black"
                size={24}
              />
            ) : (
              <Image
                onClick={handleAddtoCirlce}
                width={24}
                height={24}
                alt="user-plus-icon"
                src="/images/user-plus-icon.png"
                className=" object-contain w-6 h-6 md:w-8 md:h-8 "
              />
            )}
            <div
              className={` w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full  `}
            />
            <p className={` text-xs font-light text-primary_color`}>Online</p>
          </div>
        )}
        {!socialSuccess ? (
          <Skeleton className="w-[33.33%] h-[11px] rounded-none " />
        ) : (
          <div className=" hidden  gap-0 md:w-1/3 md:flex items-center justify-center md:gap-1 ">
            {socialLinks?.map(({ platform, url }: any) => (
              <>
                {socialMedia
                  ?.filter((item) => item.name === platform)
                  ?.map(({ icon, id }) => (
                    <Link href={url} target="_blank" key={id}>
                      {icon}
                    </Link>
                  ))}
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Actions;
