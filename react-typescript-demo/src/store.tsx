import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './Posts/postsSlice'
import CounterSlice from './Counter/CounterSlice'

export const store =  configureStore({
  reducer: {
    posts: postsReducer,
    counter: CounterSlice
  }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>