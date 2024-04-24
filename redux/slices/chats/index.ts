import { MessageProp } from "@/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

interface ChatState {
  messages:any;
  message: MessageProp;
}

const initialState: ChatState = {
  messages: [],
  message: {
    to_id: 0,
    from_id:0,
    message:"",
    id:0
  }
};
// interface Messages {
//   message: MessageProp;
// }
const chatSlice = createSlice({
  name: "chat-slice",
  initialState,
  reducers: {
    messageHandler: (state, { payload }: PayloadAction<MessageProp>) => {
      state.message = payload;
    },
    setMessages: (state, action: PayloadAction<MessageProp>) => {
      console.log("messages payload",action.payload)
      state.messages.push(action.payload);
    }
  }
});

export const { messageHandler, setMessages } = chatSlice.actions;

export default chatSlice.reducer;
