import {
  createDraftSafeSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { decreaseAsync, increaseAsync } from '../actions/counterActions'
import { RootState } from '../store'

export interface CounterState {
  number: number
  noticount: number
  dummyNumber: number[]
  sign_company: string
}

const initialState: CounterState = {
  number: 0,
  noticount: 0,
  dummyNumber: Array(100)
    .fill(undefined)
    .map((v, i) => (i + 1) * 100),
  sign_company: '',
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    basicIncrease(state, action) {
      state.number = state.number + action.payload
    },
    basicDecrease(state, action) {
      state.number = state.number - action.payload
    },
    increase(state, action: PayloadAction<number>) {
      state.number = state.number + action.payload
    },
    decrease(state, action: PayloadAction<number>) {
      state.number = state.number - action.payload
    },
    totalCountDecrease(state, action) {
      state.noticount = state.noticount - 1
    },
    setNotiListCount(state, action) {
      state.noticount = action.payload
    },
    setSign_company(state, action: PayloadAction<string>) {
      state.sign_company = action.payload
    },
  },
})

export default counterSlice

const numSelect = (state: RootState) => state.counter.number
const noticountSelect = (state: RootState) => state.counter.noticount

export const numSelector = createDraftSafeSelector(numSelect, state => state)

export const noticountSelector = createDraftSafeSelector(
  noticountSelect,
  state => state,
)

export const allCounterStateSelector = createDraftSafeSelector(
  numSelect,
  noticountSelect,
  (num, noticount) => ({
    num,
    noti: noticount,
  }),
)
