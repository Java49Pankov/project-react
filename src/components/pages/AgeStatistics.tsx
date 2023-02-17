import React from 'react';
import { Box } from "@mui/material";
import { statAge } from '../../service/EmployeesService';
import { Statistics } from '../Statistics';

export const AgeStatistics: React.FC = () => {
    return <Box sx={{ height: "80vh", width: "80vw" }}>
        <Statistics title={'Age statistics:'} propsStat={statAge}></Statistics>
    </Box>
}