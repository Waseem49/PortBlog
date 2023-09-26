"use client";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "@/app/components/header/header.module.css";
import Darkmodetoggle from "../darkmode/page";
import { signOut, useSession } from "next-auth/react";
const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];
const Header = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href={"/"}> LOGO</Link>
        </div>
        <div className={styles.title}>
          <Darkmodetoggle />
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
        {session.status === "authenticated" && (
          <button onClick={signOut} className={styles.logout}>
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
