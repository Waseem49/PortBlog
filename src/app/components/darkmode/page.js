"use client";
import React, { useContext, useState } from "react";
import styles from "@/app/components/darkmode/dark.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";
const Darkmodetoggle = () => {
  const { mode, toggle } = useContext(ThemeContext);
  //  const mode="dark"
  return (
    <div onClick={toggle} className={styles.container}>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}></div>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
    </div>
  );
};

export default Darkmodetoggle;
