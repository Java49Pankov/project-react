import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'
import { layoutConfig } from './config/layout-config';

import { Box, Typography } from '@mui/material';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigator className={layoutConfig.className}
                routes={layoutConfig.routes} />}>
                <Route index element={<Employees />}></Route>
                <Route path='add Employee' element={<AddEmployee />} />
                <Route path='Age Statistics' element={<AgeStatistics />} />
                <Route path='Salary Statistics' element={<SalaryStatistics />} />
            </Route>

        </Routes>
    </BrowserRouter>

}
export default App;
