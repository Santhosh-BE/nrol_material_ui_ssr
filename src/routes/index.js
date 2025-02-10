import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Code from "../pages/Code/Code";
import Skill from "../pages/Skill/Skill";
import Layout from "../pages/Layout";
import WorkInProgress from "../pages/WorkInProgress";
import Communication from "../pages/Communication/Communication";
import VoiceChat from "../pages/Voicechat/Voicechat";
import Skillview from "../pages/SkillView/skillview";
import Skillquestion from "../pages/Skillquestion/skillquestion";
import Assessment from "../pages/Assessment/assessment";
import Assesmentcall from "../pages/Assesmentcall/assesmentcall";
import Interview from "../pages/interview/Interview";
import { Path } from "../constants";
const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route element={<Layout />}>
        <Route path={Path.DASHBOARD} element={<Dashboard />} />
        <Route path={Path.CODE_PRACTICE} element={<Code />} />
        <Route path={Path.SKILL_TEST} element={<Skill />} />
        <Route path={Path.COMMUNICATION} element={<Communication />} />
        <Route path={Path.INTERVIEW} element={<Interview />} />
        <Route path={Path.VOICECHAT} element={<VoiceChat />} />
        <Route path={Path.SKILLVIEW} element={<Skillview />} />
        <Route path={Path.SKILLQUESTION} element={<Skillquestion />} />
        <Route path={Path.ASSESSMENT} element={<Assessment />} />
        <Route path={Path.ASSESSMENTCALL} element={<Assesmentcall />} />
        <Route path={"*"} element={<WorkInProgress />} />
      </Route>
    </Routes>
  );
};

export default Routers;
