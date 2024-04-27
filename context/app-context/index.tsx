import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { BASE_URL } from "@/constants";
import { useGetBookingHistoryQuery, useLazyGetBookingHistoryQuery } from "@/services/booking";
import { useAnswerCallMutation, useStartCallMutation } from "@/services/call";
import { getLocalStorageData } from "@/utilities/helpers";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect
} from "react";
import SimplePeer from "simple-peer";

// Define the VoiceCallContext
const VoiceCallContext = createContext<any>(null);

// Custom hook to use the VoiceCallContext
export const useVoiceCall = () => {
  return useContext(VoiceCallContext);
};

// VoiceCallProvider component
export const VoiceCallProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}: any) => {
  const peerRef = useRef<any>();
  const localStream = useRef<any>();
  const remoteStream = useRef<any>();
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [startCall] = useStartCallMutation();
  const [answerCall] = useAnswerCallMutation();
  const router = useRouter();
  const notifySound = useRef<any>();
  const [playSound, setPlaySound] = useState(false);
  const [triggerHistory] = useLazyGetBookingHistoryQuery()
  const callHandler = async ({ receiver_id, booking_ref }: any) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStream.current = stream;

      const peer = new SimplePeer({ initiator: true, stream });
      peerRef.current = peer;
      setupPeerListeners(peer, receiver_id, booking_ref);
      setIsCalling(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const answerCallHandler = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStream.current = stream;

      const peer = new SimplePeer({ initiator: false, stream });
      peerRef.current = peer;

      setupPeerListeners(peer);
      setIsCalling(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const setupPeerListeners = (
    peer?: any,
    receiver_id?: any,
    booking_ref?: any,
    offer?: any
  ) => {
    peer.on("signal", (data: any) => {
      console.log("Signal generated:", data);
      // Send signaling data (data) to the other peer using your signaling mechanism
      if (data?.type === "offer") {
        startCall({
          receiver_id: receiver_id,
          booking_ref: booking_ref,
          offer: JSON.stringify(data)
        });
      }
    });

    peer.on("stream", (remoteStream: any) => {
      console.log("Received remote stream:", remoteStream);
      remoteStream.current = remoteStream;
    });

    peer.on("connect", () => {
      console.log("Connected to peer!");
    });

    peer.on("data", (data: any) => {
      console.log("Received data:", data);
      // Handle incoming data from peer
      // alert("Incoming call",);
    });
  };

  const endCallHandler = () => {
    if (peerRef.current) {
      peerRef.current.destroy();
    }
    if (localStream.current) {
      localStream.current.getTracks().forEach((track: any) => track.stop());
    }
    if (remoteStream.current) {
      remoteStream.current.getTracks().forEach((track: any) => track.stop());
    }
    setIsCalling(false);
  };

  const toggleMuteHandler = () => {
    if (localStream.current) {
      const audioTracks = localStream.current.getAudioTracks();
      audioTracks.forEach((track: any) => {
        track.enabled = !isMuted;
      });
      setIsMuted(!isMuted);
    }
  };

  const user = getLocalStorageData("user");

  const { toast } = useToast();

  const NotificationsListener = () => {
    const incomingNotifications = new EventSource(`${BASE_URL}notify/${user?.id}`);
    incomingNotifications.onmessage = (event: any) => {
      const response = JSON.parse(event?.data);
      const notification = response?.notification;
      notifySound?.current?.play();
      if (notification) {
        toast({
          title: notification?.title,
          description: notification?.notice
        });
      }

      if (notification?.notice?.toLowerCase()?.includes("session")) {
        triggerHistory()
      }
    };
  };

  // useEffect(()=>{
  //  const incomingCall = new EventSource(`${BASE_URL}incoming/call/${user?.id}`)
  //   incomingCall.onmessage=(event:any)=>{
  //       console.log("incoming cll",event)
  //       const res = JSON.parse(event?.data)
  //       const incoming =res?.incoming
  //       console.log("incoming",res)
  //       if (incoming) {
  //         toast({
  //           title:"Incoming call",
  //           duration:700000,
  //           action:<ToastAction altText="Accept" onClick={()=>{
  //               router.push("/session-call/12")
  //           }} >Accept</ToastAction>,
  //         })
  //         // notifySound.current.src="https://bigsoundbank.com/UPLOAD/ogg/0253.ogg"
  //         // notifySound.current.play()
  //         setPlaySound(true)
  //       }
  //   }
  // },[])

  useEffect(() => {
    NotificationsListener();
  }, []);
  const contextValue = {
    isCalling,
    isMuted,
    callHandler,
    answerCallHandler,
    endCallHandler,
    toggleMuteHandler
  };

  return (
    <VoiceCallContext.Provider value={contextValue}>
      {children}
      <audio
        ref={notifySound}
        src={"https://bigsoundbank.com/UPLOAD/ogg/1111.ogg"}
        className=" hidden"
      />
    </VoiceCallContext.Provider>
  );
};
