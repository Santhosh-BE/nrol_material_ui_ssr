/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import QuizIcon from "@mui/icons-material/Quiz";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
export const SidebarOptions = [
  {
    path: "dashboard",
    id: "Dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "interview",
    id: "Interview",
    label: "Interview",
    icon: <WorkIcon />,
  },
  {
    path: "codePractice",
    id: "CodePractice",
    label: "Code Practice",
    icon: <CodeIcon />,
  },
  {
    path: "skilltest",
    id: "Skilltest",
    label: "Skill Test",
    icon: <QuizIcon />,
  },
  {
    path: "communication",
    id: "Communication",
    label: "Communication",
    icon: <ChatIcon />,
  },
  {
    path: "settings",
    id: "Settings",
    label: "Settings",
    icon: <SettingsIcon />,
  },
  { path: "profile", id: "Profile", label: "Profile", icon: <PersonIcon /> },
];
