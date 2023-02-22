import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    routes: [
        { label: 'Employees', path: '/', flAdmin: false, FlAuth: false },
        { label: 'Add Employees', path: '/add', flAdmin: false, FlAuth: false },
        { label: 'Age Statistics', path: '/statistics/age', flAdmin: false, FlAuth: false },
        { label: 'Salary Statistics', path: '/statistics/salary', flAdmin: false, FlAuth: false },
        { label: 'Login', path: '/login', flAdmin: false, FlAuth: true },
        { label: 'Logout', path: '/logout', flAdmin: false, FlAuth: false }
    ]
}