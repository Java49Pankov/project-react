import React from 'react';
import { Box, Typography } from "@mui/material";
import { statSalary } from '../../service/EmployeesService';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>
        (state => state.company.employees)
    return <Box>
        <Typography>{JSON.stringify(statSalary(employees))}</Typography>
    </Box>
}