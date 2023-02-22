import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'
import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { useSelector } from 'react-redux';
import { Logout } from './components/pages/Logout';
import { Login } from './components/pages/Login';
import { Typography } from '@mui/material';
import React, { useEffect } from 'react';


function App() {
    const authUser: string = useSelector<any, string>(state => state.auth.authenticated);
    const [routes, setRoutes] = React.useState(layoutConfig.routes);

    function routesAuthAcording() {
        if (authUser.length === 0) {
            setRoutes(layoutConfig.routes.filter(route => route.FlAuth));
        } else if (authUser.includes("admin")) {
            setRoutes(layoutConfig.routes.filter(route => !route.flAdmin));
        } else {
            setRoutes(layoutConfig.routes.filter(route => !route.label.includes('Login')));
            setRoutes(layoutConfig.routes.filter(route => !route.label.includes('Add Employees')));
        }       
    }

    useEffect(() => {
        routesAuthAcording()
    }, [authUser])

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigator routes={routes} />}>
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<Logout />} />
                <Route index element={<Employees />} />
                <Route path='add' element={<AddEmployee />} />
                <Route path='statistics/age' element={<AgeStatistics />} />
                <Route path='statistics/salary' element={<SalaryStatistics />} />

            </Route>
        </Routes>
        <Typography>User name: {authUser}</Typography>
    </BrowserRouter>

}
export default App;
