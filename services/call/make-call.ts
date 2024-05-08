import { CallProps } from "@/lib/types";
import Peer from "peerjs-next";

export const makeCall = (props: CallProps) => {
  if (typeof window !== undefined) {
    const peerInstance = new Peer(props.peerId);
    let localStream: any;

    peerInstance.on("open", async (id: string) => {
      console.log("peer id", id);
      navigator.mediaDevices
        ?.getUserMedia({ audio: true })
        .then((stream: any) => {
          localStream = stream;
          props.currentStreamRef.current.srcObject = stream;
          // currentStreamRef.current.play()
        })
        .catch((err: any) => {
          console.log("Error getting ccurrent stream", err);
        });
    });

    peerInstance.on("call", (call) => {
      call.answer(localStream);
      call.on("stream", (stream: any) => {
        props.remoteStreamRef.current.srcObject = stream;
        props.remoteStreamRef.current.play();
      });
      props.setCurrentPeer(call);
    });
  }
};
