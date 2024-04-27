import React from "react";
import AuthLayout from "../auth/layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FAQComponent from "./FAQComponent";

const About = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-24 p-12">
        <div className="flex flex-col sm:flex-row gap-6  items-start justify-start">
          <div className="flex-1 text-[14px] sm:text-[24px] ">
            In today's digital age, leaders, experts, influencers, and creators
            find themselves navigating a sea of cross-platform inboxes, while a
            burgeoning demand for mentorship, particularly among the youth,
            remains unmet. Traditional media channels offer a mere 5% likelihood
            of a response from high-profile individuals. How do we bridge this
            gap between seekers and providers of expertise?
          </div>
          <div className="flex-1 flex items-end justify-end w-full ">
            <Image
              className="w-[385px] h-[325px] sm:w-[306px] sm:h-[405px] md:w-[511px] md:h-[567px]  rounded"
              width={400}
              height={400}
              src="/images/about_img_1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 items-start justify-start">
          <div className="flex-1 text-2xl relative flex items-center justify-center w-full h-full">
            <Image
              className="rounded relative"
              width={150}
              height={300}
              src="/images/mockup2 1.png"
              alt=""
            />
            <Image
              className="rounded relative top-[-40%"
              width={150}
              height={300}
              src="/images/mockup 1.png"
              alt=""
            />
          </div>
          <div className="flex-1 flex gap-8 flex-col text-[14px] sm:text-[24px]">
            <h3 className="font-bold">The Solution</h3>
            <p>
              <strong>CARSLE</strong> is a platform designed to connect users
              with expert consultants who can provide personalized advice and
              solutions to their most pressing questions and challenges.
            </p>
            <Button className="bg-black text-white rounded-full w-[272px] h-[67px] text-[24px]">
              Start Carsling
            </Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6  items-start justify-start">
          <div className="flex-1 text-2xl flex-col flex gap-8 text-[14px] sm:text-[24px]">
            <h3 className="font-bold">Who's Carsle for?</h3>
            <p>
              <strong>CARSLE</strong> is open to anyone, with a focus on serving
              the African community. It is particularly beneficial for leaders,
              experts, influencers, creators, and anyone seeking mentorship or
              consultation.
            </p>
            <Button className="bg-black text-white rounded-full w-[272px] h-[67px] text-[24px]">
              Start Carsling
            </Button>
          </div>
          <div className="flex-1 flex items-end justify-end">
            <Image
              className="w-[385px] h-[325px] sm:w-[306px] sm:h-[405px] md:w-[511px] md:h-[567px]  rounded"
              width={511}
              height={567}
              src="/images/about_img_3.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6  items-start justify-start">
          <div className="flex-1 text-2xl relative flex items-center justify-center w-full h-full">
            <Image
              className="rounded relative "
              width={150}
              height={300}
              src="/images/mockup4 1.png"
              alt=""
            />
            <Image
              className="rounded relative top-[-40%]"
              width={150}
              height={300}
              src="/images/mockup3 1.png"
              alt=""
            />
          </div>
          <div className="flex-1 text-2xl flex gap-8 flex-col text-[14px] sm:text-[24px]">
            <h3 className="font-bold">How does Carsle work?</h3>
            <p>
              Users can sign up on CARSLE and either grant consultations as
              verified experts or receive consultations as users seeking advice.
              Verified users have a blue tick next to their profiles and can
              both grant and receive consultations, while unverified users can
              only receive consultations.
            </p>
            <Button className="bg-black text-white rounded-full w-[272px] h-[67px] text-[24px]">
              Start Carsling
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-full p-10 items-center justify-center gap-8">
        <div className="text-[64px] font-very-bold">FAQS</div>
        <FAQComponent question="What types of consultations are available on CARSLE?" answer="Consultations on CARSLE cover a wide range of topics and industries, including business, entrepreneurship, career development, personal growth, health, finance, and more. Users can find experts in their desired field and request consultations accordingly."/>
        <FAQComponent question="How do users pay for consultations?" answer="Users pay for consultations by the minute at rates set by experts, with payments processed securely through the platform."/>
        <FAQComponent question="Can users leave reviews or ratings?" answer="Yes, users can leave reviews and ratings to maintain quality standards and assist others in selecting the right expert."/>
      </div>
      </div>    
    </AuthLayout>
  );
};

export default About;
