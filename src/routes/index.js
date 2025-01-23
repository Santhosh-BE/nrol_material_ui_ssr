import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Code from '../pages/Code/Code';
const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'*'} element={<Login />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/code'} element={<Code/>} />
        </Routes>
    );
};

export default Routers;
