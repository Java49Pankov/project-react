
import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

type TimerProps = {
    cityOrCountry: string;
};

export const Timer: React.FC<TimerProps> = (props) => {
    const [timeZoneInd, setTimeInd] = React.useState(getIndex(props.cityOrCountry));
    let timeZone: string = timeZones[timeZoneInd]?.name;
    const [time, setTime] = React.useState<Date>(new Date());
    const newTimeZoneName = React.useRef(timeZone ? props.cityOrCountry : "Israel");
    console.log(props.cityOrCountry);

    function tick() {
        console.log("tick-tack");
        setTime(new Date());
    }

    function getIndex(cityOrCountry: string): number {
        return timeZones.findIndex(elem => JSON.stringify(elem).includes("\"" + cityOrCountry + "\""))
    }

    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [])

    function processInput(cityOrCountry: string): string {
        let res: string = '';
        const index: number = getIndex(cityOrCountry);
        if (index < 0) {
            res = "Error, please enter a valid city or country";
        } else {
            timeZone = timeZones[index].name;
            newTimeZoneName.current = cityOrCountry;
            setTimeInd(index)
        }
        return res;
    }


    return <div>
        <h3 > Time in time zone {newTimeZoneName.current} </h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>
            Time {time.toLocaleTimeString(undefined, { timeZone })}
        </label>
        <Input inputProcess={processInput} placeHolder={""} />
    </div >
}