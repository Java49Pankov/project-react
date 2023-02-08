import { authActions } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import React from "react";
import { Input } from "./Input";

type Props = {
    loginName: (userName: string) => boolean,
}

export const Login: React.FC<Props> = ({ loginName }) => {
    const [userName, setUserName] = React.useState('');
    const dispatch = useDispatch();

    function getUserName(valueName: string) {
        let result = ''
        if (loginName(valueName)) {
            setUserName(valueName);
        } else {
            result = `${valueName} is wrong name. Please enter name + admin`;
        }
        return result;
    }

    return <div>
        <Input placeHolder={"Enter user name"} inputProcess={getUserName} ></Input>
        <button onClick={() => dispatch(authActions.login(userName))}>Login</button>

    </div>
} 