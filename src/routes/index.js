import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Auth/Login';
const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'*'} element={<Login />} />
        </Routes>
    );
};

export default Routers;
