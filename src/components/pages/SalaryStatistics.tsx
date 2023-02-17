import React from 'react';
import { Box } from "@mui/material";
import { Statistics } from '../Statistics';
import { statSalary } from '../../service/EmployeesService';

export const SalaryStatistics: React.FC = () => {
    return <Box sx={{ height: "80vh", width: "80vw" }}>
        <Statistics title={'Salary statistics:'} propsStat={statSalary}></Statistics>
    </Box>
}