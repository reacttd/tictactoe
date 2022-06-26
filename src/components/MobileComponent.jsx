import React from "react";
import "./MobileComponent.css";
import { colors } from "../data/colors";

export const MobileComponent = () => {
  return (
    <div className="mWrapper">
      {colors.map((el, i) => (
        <div style={{ backgroundColor: el }} key={i}></div>
      ))}
    </div>
  );
};