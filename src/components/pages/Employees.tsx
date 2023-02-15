import { ListItem, Box, List } from '@mui/material';
import { useSelector } from 'react-redux';
import { Employee } from '../../model/Employee';

export const Employees: React.FC = () => {
    const employees: Employee[] = useSelector<any, Employee[]>(state => state.employees.arrEmployee);

    function getListItem(): JSX.Element[] {
        return employees.map(empl => <ListItem sx={{ border: "solid 2px blue" }}>
            {"ID: " + empl.id + "Name: " + empl.name + "BirthDate: " + empl.birthDate +
                "Department: " + empl.department + "Salary: " + empl.salary}
        </ListItem>
        )
    }
    return <Box sx={{ border: 'solid 2px red' }}>
        <List>{getListItem()}</List>
    </Box>

}