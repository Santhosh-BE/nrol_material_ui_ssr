import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Code from "../pages/Code/Code";
import Skill from "../pages/Skill/Skill";
import Layout from "../pages/Layout";
import WorkInProgress from "../pages/WorkInProgress";
const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route element={<Layout />}>
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/codePractice"} element={<Code />} />
        <Route path={"/skilltest"} element={<Skill />} />
        <Route path={"*"} element={<WorkInProgress />} />
      </Route>
    </Routes>
  );
};

export default Routers;
