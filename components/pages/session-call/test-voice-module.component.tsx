
import {useState,useEffect,useRef} from "react"
import Peer from "peerjs-next"
import { Input } from "@/components/ui/input"
const TestVoiceCallModule = () => {

    const currentStreamRef = useRef<any>()
    const remoteStreamRef = useRef<any>()
    const [currentPeer,setCurrentPeer] = useState<any>()
    const [roomId,setId] = useState("") 
    let media:any;
  
    const getUserMedia =  media?.getUserMedia
    useEffect(()=>{
  
    },[])

    const callHandler =()=>{
        if  (typeof window !==  undefined) {
            const peerInstance = new Peer(roomId);
            let localStream:any;
       
            peerInstance.on("open",async(id)=>{
            console.log("peer id",id)
            navigator.mediaDevices?.getUserMedia({audio:true}).then((stream:any)=>{
                localStream = stream
                currentStreamRef.current.srcObject = stream
                currentStreamRef.current.play()
              }).catch((err:any)=>{
                console.log("Error getting ccurrent stream",err)
              })
          

         
        })

        peerInstance.on("call",(call)=>{
            call.answer(localStream);
            call.on("stream",(stream:any)=>{
                    remoteStreamRef.current.srcObject=stream
                    remoteStreamRef.current.play()
            })
            setCurrentPeer(call)
        })
        }
       
    }


    const answerCall=()=>{
        if (  typeof window !== undefined) {
            const peerInstance = new Peer();
            let localStream:any;
            peerInstance.on("open",(id)=>{
                navigator.mediaDevices?.getUserMedia({audio:true}).then((stream:any)=>{
                    localStream = stream
                    // currentStreamRef.current.srcObject = stream
                    // currentStreamRef.current.play()
                    let call = peerInstance.call(roomId,stream)
                    call.on("stream",()=>{
                        remoteStreamRef.current.srcObject=stream
                        remoteStreamRef.current.play()
                    })
                    setCurrentPeer(call)
                  }).catch((err:any)=>{
                    console.log("Error getting ccurrent stream",err)
                  })
            })
        }
    }
    return ( 
        <>
        <div className="w-full flex items-center justify-center gap-3 mt-24 " >
            {/* <SpeakeronIcon onClick={()=>{}} size={35} className={'bg-black p-2 rounded-sm'} color={'white'} />
            <MicIcon size={27} /> */}

            <Input className=" border-black border" type="text" value={roomId} onChange={({target})=>{setId(target.value)}} />
            <button onClick={callHandler} >Call</button>
            <button onClick={answerCall} >Answer</button>

            <audio ref={currentStreamRef} muted={true} ></audio>
            <audio ref={remoteStreamRef} ></audio>
        </div>
         
        </>
     );
}
 
export default TestVoiceCallModule;