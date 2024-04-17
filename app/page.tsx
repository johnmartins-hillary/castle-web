"use client";
import Image from "next/image";
import bgImage from "../public/images/background-pattern.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Head from "next/head"
import Link from "next/link";
export default function LandingPage() {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Carsle</title>      
    </Head>
     <main
      className="w-full h-screen overflow-hidden "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="w-full px-[35px] mt-14  md:px-24 md:mt-32  ">
        <div className="w-full">
          <h1
            // style={{ width: "auto", lineHeight: "50px" }}
            className=" font-semibold m-0  relative text-[36px] md:text-5xl leading-[43px]  "
          >
            Valuable<br /> Connections<br />await<hr className=" h-[37px] md:h-14 w-1 bg-black top-24 left-28  md:top-28 md:left-40  absolute" />
          </h1>
        </div>

        <div className="w-full mt-24 gap-10  flex items-center justify-center md:items-start md:justify-start">
        <Link className=" w-[120px] md:w-44  "  href={'/auth/sign-in'} >
        <Button     className=" bg-primary_color w-full rounded-[14px] ">Login
        </Button>
        </Link>
          <Link className=" w-[120px] md:w-44 hidden md:block  " href={"/auth/sign-up"} >
          <Button

            className={"border-primary_color w-full rounded-[14px]  "}
            variant="outline"
          >
            Sign Up
          </Button>
          </Link>
        </div>
      </div>
    </main>
    
    </>
  );
}
