"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [token, settoken] = useState("");

  const toggle = () => {
    setMode((pre) => (pre === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode, token, settoken }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
