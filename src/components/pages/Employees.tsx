import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import './table.css'
import { employeesActions } from '../../redux/employees-slice';
import { EmployeeForm } from '../forms/EmployeeForm';
export const Employees: React.FC = () => {
    const selectedEmployee = React.useRef<Employee>()
    const [flEdit, setFlEdit] = React.useState(false);
    const dispatch = useDispatch();
    const authUser = useSelector<any, string>(state => state.auth.authenticated);
    const columns = React.useRef<GridColumns>([
        {
            field: 'name', headerClassName: 'header', headerName: 'Employee Name',
            flex: 1, headerAlign: 'center', align: 'center'
        },
        {
            field: 'birthDate', headerName: 'Date of Birth', flex: 1, headerClassName: 'header',
            type: "date", headerAlign: 'center', align: 'center'
        },
        {
            field: 'department', headerName: 'Department', headerClassName: 'header',
            flex: 1, headerAlign: 'center', align: 'center'
        },
        {
            field: 'salary', headerName: "Salary (NIS)", headerClassName: 'header',
            flex: 0.7, type: "number", headerAlign: 'center', align: 'center'
        },
        {
            field: 'actions', type: "actions", getActions: (params) => {
                return authUser.includes('admin') ? [
                    <GridActionsCellItem label="remove" icon={<Delete />}
                        onClick={() =>
                            dispatch(employeesActions.removeEmployee(+params.id))} />,
                    <GridActionsCellItem label="update" icon={<Edit />}
                        onClick={() => {

                            const empl = employees.find(empl => empl.id == +params.id)
                            if (empl) {
                                selectedEmployee.current = { ...empl }
                                setFlEdit(true);
                            }
                        }
                        } />
                ] : [];
            }
        }

    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return <Box sx={{ height: "80vh", width: "80vw" }}>
        {!flEdit && <DataGrid columns={columns.current} rows={employees} />}
        {flEdit && <EmployeeForm submitFn={(empl) => {
            dispatch(employeesActions.updateEmployee(empl));
            setFlEdit(false);
            return true
        }
        } employeeUpdate={selectedEmployee.current} />}
    </Box>
}
// function getListItems(employees: Employee[]): React.ReactNode {
//     return employees.map((empl, index) => <ListItem key={index}><Typography>{JSON.stringify(empl)}</Typography></ListItem>)
// }