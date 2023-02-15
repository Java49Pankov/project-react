import { Button, Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../model/Employee";
import { employeeActions } from "../../redux/employeesSlice";

export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch();
    const employee: Employee[] = useSelector<any, Employee[]>(state => state.employee.arrEmployee)
    return <Box>
        <Button onClick={() => dispatch(employeeActions.addEmployee(employee))}>Add Employee</Button>
    </Box>
}