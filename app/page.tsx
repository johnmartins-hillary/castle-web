"use client";
import Image from "next/image";
import bgImage from "../public/images/background-pattern.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Head from "next/head"
export default function LandingPage() {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Carsle</title>      
    </Head>
     <main
      className="w-full h-full overflow-hidden "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="w-full px-[23px] mt-14  md:px-24 md:mt-32  ">
        <div className="w-full">
          <h1
            // style={{ width: "auto", lineHeight: "50px" }}
            className=" font-semibold m-0  relative text-[36px] md:text-5xl  "
          >
            Valuable<br /> Connections<br />await<hr className=" h-14 w-1 bg-black top-32 left-40  absolute" />
          </h1>
        </div>

        <div className="w-full mt-24 gap-10  flex items-center justify-center mt:justify-start">
          <Button     onClick={() => router.push("/auth/sign-in")} className=" bg-primary_color w-44">Sign</Button>
          <Button
            onClick={() => router.push("/auth/sign-up")}
            className={"border-primary_color w-44 hidden md:block "}
            variant="outline"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </main>
    
    </>
  );
}
