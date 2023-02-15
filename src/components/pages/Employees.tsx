import React from 'react';
import {Box, List, ListItem, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';
export const Employees: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    return <Box>
        <List>
            {getListItems(employees)}
        </List>
    </Box>
}
function getListItems(employees: Employee[]): React.ReactNode {
    return employees.map((empl, index) => <ListItem key={index}><Typography>{JSON.stringify(empl)}</Typography></ListItem>)
}