import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Navigator } from './components/navigators/Navigator';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { layoutConfig } from './models/layout-config';
import { productsConfig } from './models/products-config';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigator navigatorProps={layoutConfig} />}>
        <Route index element={<Home />} />
        <Route path='customers' element={<Customers />} />
        <Route path='orders' element={<Orders />} />
        <Route path='products' element={<Navigator navigatorProps={productsConfig} />}>
          <Route path='dairy' element={<DairyProducts />} />
          <Route path='bread' element={<BreadProducts />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

}
export default App;
