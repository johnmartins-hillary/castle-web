import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

interface ChatState {
  messages: Message[];
  message: string;
}

const initialState: ChatState = {
  messages: [],
  message: ""
};
interface Message {
  text: string;
}
const chatSlice = createSlice({
  name: "chat-slice",
  initialState,
  reducers: {
    messageHandler: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
    setMessages: (state, action: PayloadAction<Message>) => {
      state.messages = produce(state.messages, (draft) => {
        draft.push(action.payload);
      });
    }
  }
});

export const { messageHandler, setMessages } = chatSlice.actions;

export default chatSlice.reducer;
