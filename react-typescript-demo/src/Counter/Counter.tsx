import { useState } from "react"
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from "../hooks"
import { increment } from "./CounterSlice"

  

export function Counter() {
  // State: a counter value

  const count = useAppSelector(state => {
    return state.counter.value
})
  const dispatch = useAppDispatch()

  // View: the UI definition
  return (
    <div>
      Value: {count} 
      <button onClick={ () => {dispatch(increment())} }>Increment</button>
    </div>
  )
}