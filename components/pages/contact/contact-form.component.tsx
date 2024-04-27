"use client"
import React from 'react'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";



const ContactForm = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pb-8">
      <div className=" lg:w-1/3 flex flex-col items-center justify-center mt-10  md:max-lg:w-2/5 w-[85%]  ">
        <div className="w-full">
          <h3 className="font-bold text-center text-lg">Send a message</h3>
        </div>
        <div className="w-full mt-9">
          <div className="w-full mb-5">
            <label
              className="font-normal text-sm text-left relative left-3"
              htmlFor="name"
            >
              Name
            </label>
          </div>

          <div className="w-full">
            <Input
              id="name"
              className="w-full border-0 border-b-2 border-light_grey  rounded-none text-black py-6  focus:outline-none "
              style={{outline: "none"}}
            />
          </div>
          <p className=" mt-5  text-red-600 text-sm text-left left-[12px] "></p>
        </div>
        <div className="w-full mt-9">
          <div className="w-full mb-5">
            <label
              className="font-normal text-sm text-left relative left-3"
              htmlFor="email"
            >
              Email
            </label>
          </div>

          <div className="w-full">
            <Input
              id="email"
              className="w-full   text-black py-6 border-0 border-b-2 border-light_grey  rounded-none focus:outline-none"
              
            />
          </div>
          <p className=" mt-5  text-red-600 text-sm text-left left-[12px] "></p>
        </div>
        <div className="w-full mt-3">
          <div className="w-full mb-5">
            <label
              className="font-normal text-sm text-left relative left-3"
              htmlFor="message"
            >
              Message
            </label>
          </div>

          <div className="w-full">
            <Textarea
              id="message"
              className="w-full border-0 border-b-2 border-light_grey  rounded-none text-black py-6  focus:outline-none "
            />
          </div>
          <p className=" mt-5  text-red-600 text-sm text-left left-[12px] "></p>
          <div className="mt-2 w-full"></div>
        </div>

        <div className="w-full mt-10">
          <Button className="bg-primary_color rounded-3xl py-7 text-white w-full ">
            {false ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm