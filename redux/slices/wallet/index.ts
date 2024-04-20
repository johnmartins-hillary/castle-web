import { FundWalletProps } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit"
const initialState: FundWalletProps = {
    amount: ""
}


const walletSlice = createSlice(
    {
        name: "user-wallet-slice",
        initialState,
        reducers: {
            fundAmountHandler: (state, { payload }) => {
                state.amount = payload
            }
        }
    }
)


export const { fundAmountHandler } = walletSlice.actions;

export default walletSlice.reducer;