import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from '../index';

interface CounterState { // 定义初始化状态的类型
    value: number
}
const initialState: CounterState = { // 初始化状态
    value: 44
}
export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state;
export default counterSlice.reducer;