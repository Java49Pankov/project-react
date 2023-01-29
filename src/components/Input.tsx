import React, { useEffect } from "react";
import { Alert } from "./Alert";


type InputProps = {
    // inputId: string;
    inputProcess: (value: string) => string;
    placeHolder: string;
}

export const Input: React.FC<InputProps> = ({placeHolder, inputProcess }) => {
    let inputElement: HTMLInputElement | null;
    const [message, setMessage] = React.useState('');
    const [inputId] = React.useState(Math.round(Math.random() * 100000000) + '');


    function processClick(): void {
        setMessage('');
        const messageRes: string = inputProcess(inputElement!.value);
        if (messageRes === '') {
            inputElement!.value = '';
        } else {
            setMessage(messageRes);
        }
    }
   
    React.useEffect(() => {
        inputElement = document.getElementById(inputId) as HTMLInputElement;
    })

    return <div>
        <input id={inputId} placeholder={placeHolder}/>
        <button onClick={processClick} >click</button>
        {message && <Alert type={"error"} message={message} />}
    </div>
}