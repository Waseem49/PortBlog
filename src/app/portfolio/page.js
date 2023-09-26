import React from "react";
import styles from "@/app/portfolio/portfoilio.module.css";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div>
      <div>
        <h3 className={styles.h3}>Let see works</h3>
        <div className={styles.container}>
          <Link href={"portfolio/illustrations"}>
            <div className={styles.item}>
              <Image
                src="https://static.vecteezy.com/system/resources/previews/003/521/522/large_2x/angry-werewolf-on-red-blood-moon-illustration-free-vector.jpg"
                alt=""
                width={300}
                height={300}
                className={styles.img}
              />
              <h2 className={styles.h1}>Illustrations</h2>
            </div>
          </Link>
          <Link href={"portfolio/websites"}>
            <div className={styles.item}>
              <Image
                src="https://static.vecteezy.com/system/resources/previews/023/134/906/non_2x/light-bulb-and-brain-together-the-use-of-smart-technology-used-through-the-internet-network-to-help-in-finding-new-ideas-for-work-or-new-business-to-further-grow-further-by-using-technology-vector.jpg"
                alt=""
                width={300}
                height={300}
                className={styles.img}
              />
              <h2 className={styles.h1}>Website</h2>
            </div>
          </Link>
          <Link href={"portfolio/applications"}>
            <div className={styles.item}>
              <Image
                src="https://static.vecteezy.com/system/resources/previews/003/521/522/large_2x/angry-werewolf-on-red-blood-moon-illustration-free-vector.jpg"
                alt=""
                width={300}
                height={300}
                className={styles.img}
              />
              <h2 className={styles.h1}>Application</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
