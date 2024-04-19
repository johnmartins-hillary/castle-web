import Image from "next/image";

const DashboardBanner = () => {
  return (
    <>
      <div className="w-full rounded-[24px] flex items-center justify-between md:rounded-xl bg-primary_color 2xl:w-[500px] 2xl:mx-auto ">
        <div className="w-[70%] py-[40px] px-[23px] md:p-14 md:max-lg:w-[70%]">
          <p className="text-white text-xs font-light md:max-lg:text-xl lg:text-2xl">
            Want to make more valuable<br />connections today?
          </p>
        </div>
        <div className="w-[30%] flex justify-center">
          {/* Adjust the Image component with a larger size while preserving aspect ratio */}
          <div style={{ maxWidth: "100%", maxHeight: "100%", width: "100%" }}>
            <Image
              src="/images/banner-image.png"
              width={548} // Increase the width by 1.5 times
              height={187} // Increase the height by 1.5 times
              alt="banner-image"
     // Ensure responsive image behavior
              className="object-cover h-[187px] "
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <p className="text-center text-xs font-light text-primary_color md:text-lg">
          Visit the{" "}
          <span className="font-bold capitalize md:font-light md:lowercase">
            explore page
          </span>{" "}
          and search by categories
        </p>
      </div>
    </>
  );
};

export default DashboardBanner;
