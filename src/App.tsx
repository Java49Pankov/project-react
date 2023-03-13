import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { useEffect, useState } from 'react';
import { RouteType } from './model/RouteType';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { Generation } from './components/pages/Generation';
import { NavigatorDispatch } from './components/navigators/NavigatorDispatch';
import { employeesActions } from './redux/employees-slice';

function App() {
    const [routes, setRoutes] = useState<RouteType[]>([]);
    const authUser: string = useSelector<any, string>(state => state.auth.authenticated);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        function getRoutes(): RouteType[] {
            const logoutRoute: RouteType | undefined = layoutConfig.routes
                .find(r => r.path.includes('logout'))
            logoutRoute!.label = authUser;
            return layoutConfig.routes.filter(r => (!authUser && !r.flAuth) ||
                (authUser.includes('admin') && r.flAdmin) ||
                (authUser && r.flAuth && !r.flAdmin));
        }
        setRoutes(getRoutes());
    }, [authUser]);

    useEffect(() => {
        if (authUser) {
            dispatch(employeesActions.getEmployees());
        }
    }, [authUser])

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavigatorDispatch
                routes={routes} />}>
                <Route index element={<Employees />} />
                <Route path='add' element={<AddEmployee />} />
                <Route path='statistics/age' element={<AgeStatistics />} />
                <Route path='statistics/salary' element={<SalaryStatistics />} />
                <Route path='login' element={<Login />} />
                <Route path='logout' element={<Logout />} />
                <Route path='generation' element={<Generation />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
export default App;
