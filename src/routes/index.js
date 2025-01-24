import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Code from '../pages/Code/Code';
import Skill from '../pages/Skill/Skill';
const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'*'} element={<Login />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/code'} element={<Code/>} />
            <Route path={'/skill'} element={<Skill/>} />
        </Routes>
    );
};

export default Routers;
