import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"


export type CountState = {
    value: number
}


const initialState: CountState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        }
    }
  })

export const { increment } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
  