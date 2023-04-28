import React, { useState } from "react";
import styles from "./Counter.module.css"
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, incrementAsync, selectCount } from "./counterSlice";

export function Counter(){

    const num = useSelector(selectCount)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return(
        <div>
            <div className={styles.row}>
                <button 
                    className={styles.button}
                    onClick={() => dispatch(increment())}
                >+</button>
                <span className={styles.value}>{num}</span>
                <button 
                    className={styles.button}
                    onClick={() => dispatch(decrement())}
                >-</button>
            </div>
            <div className={styles.row}>
                <input 
                    className={styles.textbox}
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button 
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >Add Amount(일반 증가버튼)</button>
                <button 
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >Add Async(비동기 증가버튼)</button>
            </div>
        </div>
    )
}