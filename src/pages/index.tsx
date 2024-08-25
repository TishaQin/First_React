import { useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
} from "../store/features/user";

function Index() {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.user.value);
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
        </div>
    );
}

export default Index;
