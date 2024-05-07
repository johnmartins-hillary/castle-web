import React from "react";
import AuthLayout from "../auth/layout";
import Image from "next/image";
import FAQComponent from "./FAQComponent";
import Link from "next/link";
import { ForwardIcon } from "@/components/icons/icons";

const About = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col  p-4 md:p-12 w-full pb-[116px] md:pb-[297px] lg:px-[130px] ">
        <div className=" w-full flex flex-col items-start justify-start md:flex-row-reverse md:gap-6 ">
          <div className="flex-1 flex items-end justify-end w-full ">
            <Image
              className="w-[385px] h-[324px] object-cover  md:w-[511px] md:h-[446px] lg:w-[511px] lg:h-[567px]"
              width={400}
              height={400}
              src="/images/about_img_1.png"
              alt=""
            />
          </div>
          <div className="flex-1  mt-[22px] md:mt-0  ">
            <p className="text-[14px] leading-[20px] md:text-[24px] md:leading-[40px] ">
              In today&apos;s digital age, leaders, experts, influencers, and
              creators find themselves navigating a sea of cross-platform
              inboxes, while a burgeoning demand for mentorship, particularly
              among the youth, remains unmet. Traditional media channels offer a
              mere 5% likelihood of a response from high-profile individuals.
              How do we bridge this gap between seekers and providers of
              expertise?
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-[65px] md:flex-row lg:mt-[246px]  ">
          <div className="flex-1 relative flex items-center justify-center  w-full ">
            <Image
              className=" w-[242px] h-[309px] object-cover md:h-[350px] md:w-auto  "
              width={150}
              height={300}
              src="/images/home-page-img.png"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="font-bold  text-[20px] m-0 p-0 md:text-[36px] ">
              The Solution
            </h3>
            <p className=" text[16px] font-light leading-[20px] mt-[6px] md:text-[24px] md:leading-[40px] nd:mt- ">
              <strong className=" font-bold">CARSLE</strong> is a platform
              designed to connect users with expert consultants who can provide
              personalized advice and solutions to their most pressing questions
              and challenges.
            </p>
            <Link
              href="/auth/sign-up"
              className="bg-black flex mt-[30px]  items-center justify-center gap-[12px] text-white rounded-full w-[203px] h-[50px] md:w-[272px] md:h-[67px] text-[16px] md:text-[24px] "
            >
              Start Carsling
              <ForwardIcon
                size={24}
                className={""}
                onClick={() => {}}
                color="white"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-[65px]  items-start justify-start w-full md:flex-row-reverse  md:gap-6 md:mt-[149px] lg:mt-[322px] ">
          <div className="flex-1 flex items-end justify-end">
            <Image
              className="w-[379px] h-[376px]  object-cover  rounded md:w-[331px] md:h-[420px] lg:w-[495px] lg:h-[563px] "
              width={511}
              height={567}
              src="/images/about_img_3.png"
              alt=""
            />
          </div>
          <div className="flex-1 text-2xl flex-col flex mt-[20px]  ">
            <h3 className="font-bold text-[20px] md:text-[36px] ">
              Who&apos;s Carsle for?
            </h3>
            <p className=" mt-[10px] font-light text-[16px] leading-[20px] md:text-[24px] md:leading-[40px] md:mt-[31px] ">
              <strong className="font-bold">CARSLE</strong> is open to anyone,
              with a focus on serving the African community. It is particularly
              beneficial for leaders, experts, influencers, creators, and anyone
              seeking mentorship or consultation.
            </p>
            <Link
              href="/auth/sign-up"
              className="bg-black flex mt-[30px]  items-center justify-center gap-[12px] text-white rounded-full w-[203px] h-[50px] md:w-[272px] md:h-[67px] text-[16px] md:text-[24px]"
            >
              Start Carsling
              <ForwardIcon
                size={24}
                className={""}
                onClick={() => {}}
                color="white"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col  items-start justify-start w-full mt-[65px] md:flex-row md:mt-[140px] md:gap-6 lg:mt-[175px] ">
          <div className="flex-1 relative flex items-center justify-center  w-full ">
            <Image
              className=" w-[295px] h-[386px] object-contain md:h-[350px] md:w-auto"
              width={150}
              height={300}
              src="/images/consultant-page.png"
              alt=""
            />
          </div>
          <div className="flex-1  flex flex-col mt-[75px] md:mt-0 ">
            <h3 className="font-bold text-[20px] md:text-[36px] ">
              How does Carsle work?
            </h3>
            <p className=" text-[16px] font-light md:text-[24px] md:leading-[40px] md:mt-[31px] ">
              Users can sign up on CARSLE and either grant consultations as
              verified experts or receive consultations as users seeking advice.
              Verified users have a blue tick next to their profiles and can
              both grant and receive consultations, while unverified users can
              only receive consultations.
            </p>
            <Link
              href="/auth/sign-up"
              className="bg-black flex mt-[30px]  items-center justify-center gap-[12px] text-white rounded-full w-[203px] h-[50px] md:w-[272px] md:h-[67px] text-[16px] md:text-[24px] "
            >
              Start Carsling
              <ForwardIcon
                size={24}
                className={""}
                onClick={() => {}}
                color="white"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full mt-[76px] items-center justify-center md:mt-[142px] ">
          <div className="mb-[32px] ">
            <h3 className="text-[32px] md:text-[64px] font-very-bold ">FAQS</h3>
          </div>
          <FAQComponent
            question="What types of consultations are available on CARSLE?"
            answer="Consultations on CARSLE cover a wide range of topics and industries, including business, entrepreneurship, career development, personal growth, health, finance, and more. Users can find experts in their desired field and request consultations accordingly."
          />
          <FAQComponent
            question="How do users pay for consultations?"
            answer="Users pay for consultations by the minute at rates set by experts, with payments processed securely through the platform."
          />
          <FAQComponent
            question="Can users leave reviews or ratings?"
            answer="Yes, users can leave reviews and ratings to maintain quality standards and assist others in selecting the right expert."
          />
          <Link
            href="/auth/sign-up"
            className="bg-black flex mt-[30px]  items-center justify-center gap-[12px] text-white rounded-full w-[203px] h-[50px] md:w-[272px] md:h-[67px] text-[16px] md:text-[24px] "
          >
            Start Carsling
            <ForwardIcon
              size={24}
              className={""}
              onClick={() => {}}
              color="white"
            />
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default About;
