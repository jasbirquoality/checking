import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navigationConfig from "./navigationConfig";
import "./index.css";

const styleObj = { color: "white", backgroundColor: "cadetblue" };
const SideMenuContent = () => {

  const [selected, setSelected] = useState();
  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <>
      {navigationConfig.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.navLink}
            className="text"
            onClick={() => handleClick(index)}
          >
            <div className="item " style={selected === index ? styleObj : {}}>
              {item.icon}
              <span
                className=" ml-1 text"
                style={selected === index ? { color: "white" } : {}}
              >
                {item.title}
              </span>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};
export default SideMenuContent;
