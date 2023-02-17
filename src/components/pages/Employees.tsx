import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import './table.css';

export const Employees: React.FC = () => {
    const columns = React.useRef<GridColumns>([
        { field: "name", headerClassName: "header", headerName: "Employee Name", flex: 1, headerAlign: "center", align: "center" },
        { field: "birthDate", headerClassName: "header", headerName: "Date of Birth", flex: 1, type: "date", headerAlign: "center", align: "center" },
        { field: "department", headerClassName: "header", headerName: "Department", flex: 1, headerAlign: "center", align: "center" },
        { field: "salary", headerClassName: "header", headerName: "Salary (NIS)", flex: 0.8, type: "number", headerAlign: "center", align: "center" }
    ])

    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return <Box sx={{ height: "80vh", width: "80vw" }}>
        <DataGrid columns={columns.current} rows={employees} />
    </Box>
}
