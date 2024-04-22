// reducers/index.ts
import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
// import layoutSlice from './layoutSlice'
import counterSlice, { CounterState } from './counterSlice'
import fetchSlice from './fetchSlice'
// import userSlice from './userSlice'
// 다른 slice들 import...

export interface ReducerStates {
  counter: ReturnType<typeof counterSlice.reducer>
  fetchs: ReturnType<typeof fetchSlice.reducer>
}

const combinedReducer = combineReducers({
  counter: counterSlice.reducer,
  fetchs: fetchSlice.reducer,
})

// Define the rootReducer with explicit return type
const rootReducer = (
  state: ReducerStates | undefined,
  action: AnyAction,
): ReducerStates => {
  if (action.type === HYDRATE) {
    const nextState: ReducerStates = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state && state.counter) nextState.counter = state.counter // preserve counter value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export default rootReducer
