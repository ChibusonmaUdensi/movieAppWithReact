import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from "../app/features/counterSlice/counterSlice"

const Counter = () => {
     const {count} = useSelector((state) => state.counter);
     const dispatch = useDispatch();
   return (
        <div><h1>Count:{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
   )
}

export default Counter;