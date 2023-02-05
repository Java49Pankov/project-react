import { useSelector } from 'react-redux';

export const CounterMultiply: React.FC = () => {
    const count = useSelector<any, number>(state => state.counter.count);
    return <p>count: {count} * 10 = {count * 10}</p>
}
