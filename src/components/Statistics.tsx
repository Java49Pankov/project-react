import React from 'react';
import './pages/table.css';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { Employee } from '../model/Employee';
import { useSelector } from 'react-redux';

type Props = {
    title: string;
    propsStat: (values: Employee[]) => {
        minValue: number, maxValue: number, avgValue: number
    }
}

export const Statistics: React.FC<Props> = ({ title, propsStat }) => {
    const employee: Employee[] = useSelector<any, Employee[]>(state => state.company.employees)
    const columns = React.useRef<GridColumns>([
        { field: 'minValue', headerClassName: "header", headerName: 'Minimal Salary', flex: 1, headerAlign: "center", align: "center" },
        { field: 'maxValue', headerClassName: "header", headerName: 'Maximal Salary', flex: 1, headerAlign: "center", align: "center" },
        { field: 'avgValue', headerClassName: "header", headerName: 'Average Salary', flex: 1, headerAlign: "center", align: "center" }
    ])

    return <Box sx={{ height: "50vh", width: "60vw" }}>
        <Typography sx={{ fontSize: "1.2em", fontWeight: "bold" }}>{title}</Typography>
        <DataGrid columns={columns.current} rows={[{ id: 0, ...propsStat(employee) }]} />
    </Box>
}