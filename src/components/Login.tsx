import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(authActions.login())}>Login</button>
}