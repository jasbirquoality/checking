import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "App Level",
    title: "App Level",
    type: "item",
    icon: <Icon.Mail size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    id: "Learning Progression",
    title: "Learning Progression",
    type: "item",
    icon: <Icon.MessageSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/bucket2",
  },
];

export default navigationConfig
