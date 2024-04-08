import Hello from "@/components/pages/dashboard/hello.component";
import DashboardLayout from "../dashboard/layout";
import YourCirlceBanner from "@/components/pages/your-circle/circle-banner";
import Head from "next/head";
import YourConsultants from "@/components/pages/your-circle/your-consultants.component";

const YourCircle = () => {
    return (
        <>
        <Head>
            <title>Your Circle - Carsle</title>
        </Head>
        <DashboardLayout>
                <Hello/>
                <YourCirlceBanner/>
                <YourConsultants/>
        </DashboardLayout>
        </>
      );
}
 
export default YourCircle;