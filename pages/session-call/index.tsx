import AvatarWithBadge from "@/components/avatar/avatar.component"
import DashboardLayout from "../dashboard/layout"
import CallTimer from "@/components/pages/session-call/timer.component"
import VoiceCallModule from "@/components/pages/session-call/voice-call-module.component"
import EndCall from "@/components/pages/session-call/end-call.component"
import Head from "next/head"
import MobileNavbar from "@/components/pages/landing-page/navbar/mobile-navbar.component"

const SessionCall =()=>{
    return(
        <>
        <Head>
            <title>Session Call</title>
        </Head>
        <DashboardLayout>
            <MobileNavbar/>
            <div className="max-lg:px-14 max-lg:mb-12 max-sm:px-3" />
            <div className="w-full flex flex-col items-center justify-center gap-8 " >
            <AvatarWithBadge/>
            <p className=" text-bold text-lg " >Val Okafor</p>
            </div>

            <CallTimer/>
            <VoiceCallModule/>
            <EndCall/>
        </DashboardLayout>
        </>
    )
}

export default SessionCall