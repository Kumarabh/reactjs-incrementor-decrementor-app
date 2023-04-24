import {incrementAction, decrementAction} from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

import './Test.css';

export default function Test() {

    let incDecValue = useSelector((state) => state.IncDecReducer)
    const dispatch = useDispatch();

    return (
        <>
            <div className="container">
                <h5 >{incDecValue}</h5>
                <button onClick={() => dispatch(incrementAction(5))}>Increment</button>
                <button onClick={() => dispatch(decrementAction(5))}>Decrement</button>
            </div>
        </>
    )
}