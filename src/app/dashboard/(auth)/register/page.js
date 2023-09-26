"use client";
import React, { useState } from "react";
import styles from "@/app/dashboard/(auth)/register/register.module.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setError] = useState();
  const router = useRouter();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      res.status === 200 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className={styles.register}>
      <div>
        <h3 className={styles.h2}>USER REGISTER</h3>
        <form onSubmit={handlesubmit} className={styles.form}>
          <input type="text" placeholder="User-name" required name="name" />
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
          />
          <button className={styles.logbtn}>Register</button>
        </form>
        {err && "Something went wrong"}
      </div>
    </div>
  );
};
export default Register;
