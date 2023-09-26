"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/dashboard/(auth)/login/login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [err, setError] = useState(false);
  const router = useRouter();
  const session = useSession();
  const init = {
    email: "",
    password: "",
  };
  const [user, setuser] = useState(init);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser((prev) => ({ ...prev, [name]: value }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", user);
  };
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    return router?.push("/dashboard");
  }
  return (
    <div className={styles.container}>
      <div className={styles.imagecon}>
        <Image
          className={styles.img}
          src={
            "https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1688842771~exp=1688843371~hmac=22a46f736bf9b0a5b5baff8ec9cdd51e8949a98dcf554a94c6cf7ee5f7bd0296"
          }
          alt="loginimage"
          width={450}
          height={400}
        />
      </div>
      <div>
        <h2 className={styles.h2}>USER LOGIN</h2>
        <form className={styles.form} onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="example@gmail.com"
            onChange={(e) => handlechange(e)}
            value={user.email}
            name="email"
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => handlechange(e)}
            value={user.password}
            name="password"
          />
          <p className={styles.pp}>{err ? "wrong credential" : ""}</p>
          <button className={styles.logbtn}>Login</button>
          <p>-or-</p>
          <p className={styles.p}>
            <Link href={"/dashboard/register"}>Create new account</Link>
          </p>
        </form>
        <button className={styles.goobtn} onClick={() => signIn("google")}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
