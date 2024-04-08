import Image from "next/image";

const PhotoGraphs = () => {
  return (
    <div className="w-full m-auto md:w-[90%] lg:w-4/5 mt-8 md:mt-16">
      <div className="w-1/2 flex items-center justify-start">
        <p className=" font-bold text-sm">Photographs</p>
      </div>

      <div className="w-full flex items-center justify-start gap-2  md:gap-2 mt-3 flex-wrap ">
        {[0, 1, 2, 3, 4, 5].map(() =>
          <Image
            src={"/images/photograph.png"}
            height={26}
            width={118}
            alt="photograph"
            className=" object-contain  "
          />
        )}
      </div>
    </div>
  );
};

export default PhotoGraphs;
