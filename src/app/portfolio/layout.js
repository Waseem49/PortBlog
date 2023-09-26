import React from "react";
import styles from "@/app/portfolio/portfoilio.module.css";
const layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.title}>OUR WORKS</h1>
      {children}
    </div>
  );
};

export default layout;
