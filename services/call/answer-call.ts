import { CallProps } from "@/lib/types";
import Peer from "peerjs-next";

export const answerCall = ({
  peerId,
  remoteStreamRef,
  setCurrentPeer
}: CallProps) => {
  if (typeof window !== undefined) {
    const peerInstance = new Peer();
    let localStream: any;
    peerInstance.on("open", (id) => {
      navigator.mediaDevices
        ?.getUserMedia({ audio: true })
        .then((stream: any) => {
          localStream = stream;
          // currentStreamRef.current.srcObject = stream
          // currentStreamRef.current.play()
          let call = peerInstance.call(peerId, stream);
          call.on("stream", () => {
            remoteStreamRef.current.srcObject = stream;
            remoteStreamRef.current.play();
          });
          setCurrentPeer(call);
        })
        .catch((err: any) => {
          console.log("Error getting ccurrent stream", err);
        });
    });
  }
};
