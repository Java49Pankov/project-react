import React from "react";
import employeeConfig from "../../config/employee-config.json";
import { Box, Button, TextField } from "@mui/material";
type Props = {
    submitFn: (count: number) => void;
}
export const GenerationForm: React.FC<Props> = ({ submitFn }) => {
    const { minGen, maxGen } = employeeConfig;
    const [count, setCount] = React.useState(0);

    function onSubmitFn(event: any) {
        event.preventDefault();
        submitFn(count);
        document.querySelector('form')!.reset();
    }

    function handlerGenerat(event: any) {
        setCount(+event.target.value);
    }

    return <Box>
        <form onSubmit={onSubmitFn}>
            <TextField label="generation" fullWidth required type="number"
                onChange={handlerGenerat}
                helperText={`enter amount generation employees in range [${minGen}-${maxGen}]`}
                inputProps={{
                    min: `${minGen}`,
                    max: `${maxGen}`
                }} />
            <Button type="submit">Submit</Button>
        </form>

    </Box>
}