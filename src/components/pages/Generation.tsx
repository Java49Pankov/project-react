import React from "react";
import { Box, Stack, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { employeesActions } from "../../redux/employees-slice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { GenerationForm } from "../forms/GenerationForm";


export const Generation: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const [alert, setAlert] = React.useState(false);
    const dispatch = useDispatch();
    return <Box>
        {!alert && <GenerationForm submitFn={(num) => {
            for (let i = 0; i < num; i++) {
                dispatch(employeesActions.addEmployee(createRandomEmployee()));
            }
            setCount(num);
            setAlert(true);
            setTimeout(() => setAlert(false), 4000);
        }
        } />
        }
        {alert && <Stack sx={{ width: '80vw' }} >
            <Alert variant="filled" severity="success">
                number of employees generated: {count}
            </Alert>
        </Stack>}
    </Box>
}