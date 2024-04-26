import { Button } from "@/components/ui/button";
import { MicIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { MdPhone } from "react-icons/md";
import SimplePeer from "simple-peer";

const VoiceCallModule = () => {
  const peerRef = useRef<any>();
  const localStream = useRef<any>();
  const remoteStream = useRef<any>();
  const localAudio = useRef<any>();
  const remoteAudio = useRef<any>();
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const callHandler = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStream.current = stream;

      if (localAudio.current) {
        localAudio.current.srcObject = stream;
        localAudio.current.play();
      }

      const peer = new SimplePeer({ initiator: true, stream });
      peerRef.current = peer;

      setupPeerListeners(peer);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const answerCallHandler = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStream.current = stream;

      if (localAudio.current) {
        localAudio.current.srcObject = stream;
        localAudio.current.play();
      }

      const peer = new SimplePeer({ initiator: false, stream });
      peerRef.current = peer;

      setupPeerListeners(peer);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const setupPeerListeners = (peer: any) => {
    peer.on("signal", (data: any) => {
      console.log("Signal generated:", data);
      // Send signaling data (data) to the other peer using your signaling mechanism
    });

    peer.on("stream", (remoteStream: any) => {
      console.log("Received remote stream:", remoteStream);
      remoteStream.current = remoteStream;

      if (remoteAudio.current) {
        remoteAudio.current.srcObject = remoteStream;
        remoteAudio.current.play();
      }
    });

    peer.on("connect", () => {
      console.log("Connected to peer!");
      setIsCalling(true);
    });

    peer.on("data", (data: any) => {
      console.log("Received data:", data);
      // Handle incoming data from peer
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

  return (
    <div className="w-full flex items-center justify-center gap-3 mt-24">
      {!isCalling ? (
        <>
          <button onClick={callHandler}>Call</button>
          {/* Answer button for incoming calls */}
          <button onClick={answerCallHandler}>Answer</button>
        </>
      ) : (
        <button onClick={endCallHandler}>End Call</button>
      )}

      <button onClick={toggleMuteHandler}>
        {isMuted ? "Unmute" : "Mute"}
        <MicIcon  size={27} />
      </button>

      <audio ref={localAudio} autoPlay />
      <audio ref={remoteAudio} autoPlay />
      <div className="w-full flex items-center justify-center mt-14 " >
          <Button onClick={endCallHandler} className=" bg-red-400  w-[56.11px] h-[56.11px] rounded-2xl hover:bg-red-500   " >
          <MdPhone size={24} className=" -rotate-45" />
          </Button>
        </div>
    </div>
  );
};

export default VoiceCallModule;
