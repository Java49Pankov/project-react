import React from "react";

type AlertProps = {
    type: "warn" | "info" | "error";
    message: string;
}

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
    let backGround: "red" | "green" | "yelow";
    switch (type) {
        case "warn": backGround = "yelow";
            break;
        case "info": backGround = "green";
            break;
        case "error": backGround = "red";

    }

    return <p style={{ backgroundColor: backGround }}>{message}</p>
}