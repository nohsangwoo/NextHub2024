'use client'

import counterSlice from "@/store/reducers/counterSlice"
import { useAppDispatch, useAppSelector } from "@/store/store"

export default function ReduxTest() {

    const counterNum = useAppSelector(state => state.counter.number)

    const dispatch = useAppDispatch()

    const handleMinus = () => {
        dispatch(counterSlice.actions.basicDecrease(1))
    }

    const handlePlus = () => {
        dispatch(counterSlice.actions.basicIncrease(1))
    }

    const handleSagaMinus = () => {
        dispatch(counterSlice.actions.decrease(1))
    }

    const handleSagaPlus = () => {
        dispatch(counterSlice.actions.increase(1))
    }



    return (
        <div>
            <h1>Redux Test</h1>
            <div className="flex gap-2">
                <button
                    onClick={handleMinus}>
                    minus
                </button>
                <button
                    onClick={handlePlus}
                >
                    plus
                </button>
                <button
                    onClick={handleSagaMinus}>
                    saga minus
                </button>
                <button
                    onClick={handleSagaPlus}
                >
                    saga plus
                </button>
            </div>
            <div className="">{counterNum}</div>
        </div>
    )
}