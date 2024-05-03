import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const GetVeified = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full mt-[33px] md:hidden ">
        <div
          onClick={() => {
            router.push("/get-verified");
          }}
          className=" w-[164px] pl-[5.5px] h-[40px] pr-[21px] text-xs md:text-sm md:w-[327px] rounded-[20px] bg-primary_color flex items-center justify-between  "
        >
          <CheckIcon
            size={33}
            className="bg-white rounded-full p-2"
            color={"black"}
            onClick={() => {}}
          />
          <p className=" font-light text-[13px] text-white py-[10px]">
            Get Verfied
          </p>
        </div>
      </div>
    </>
  );
};

export default GetVeified;
