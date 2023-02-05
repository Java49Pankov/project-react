import { useDispatch } from 'react-redux';
import { counterActions } from '../redux/counterSlice';

export const CounterUpdater: React.FC = () => {
    const dispatch = useDispatch();
    return <div>
        <button onClick={() => dispatch(counterActions.increment())}>+</button>
        <button onClick={() => dispatch(counterActions.decrement())}>-</button>
        <button onClick={() => dispatch(counterActions.reset())}>reset</button>

    </div>
}