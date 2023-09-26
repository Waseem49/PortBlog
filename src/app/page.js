import Image from "next/image";
import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              Better design for your digital products
            </h1>
            <p className={styles.desc}>
              Turning your idea into reality.we bring together the teams from
              the global tech industry
            </p>
            <Link href={"/portfolio"}>
              <button className={styles.button}>See Our Works</button>
            </Link>
          </div>
          <div className={styles.image}>
            <Image
              src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="homeimg"
              width={500}
              height={400}
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.abcontainer}>
        <div className={styles.abimagecon}>
          <Image
            src="https://images.pexels.com/photos/14973655/pexels-photo-14973655/free-photo-of-green-leaves-with-white-veins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.abimg}
          />
          <div className={styles.abimagetext}>
            <h1>Digital Storytellers</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              placeat.
            </h2>
          </div>
        </div>
        <div className={styles.abtextcon}>
          <div>
            <h2>Who WE Are?</h2>
            <div className={styles.linee}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              quam aliquid blanditiis officia ea minima
              <br />
              <br /> corrupti error labore, quibusdam ipsa, laboriosam tenetur
              cum magni nobis soluta! Dolor sapiente sunt recusandae nihil autem
              nostrum
              <br />
              <br />
              asperiores saepe veritatis! Assumenda ab voluptatum numquam,
              inventore nihil tempora quaerat iure nesciunt vero optio molestias
              iusto!
            </p>
          </div>
          <div>
            <h2>What WE Do?</h2>
            <div className={styles.linee}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              quam aliquid blanditiis officia ea minima corrupti error labore,
              quibusdam ipsa, laboriosam tenetur cum numquam, <br />
              <br />
              -Dynamic Website
              <br />
              -Fast and Handy
              <br />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className={styles.cch1}>Lets keep in Touch</h1>
        <div className={styles.line}></div>
        <div className={styles.cccontainer}>
          <div>
            <Image
              src="https://img.freepik.com/free-vector/working-characters-flat-design-web-banner_1308-128001.jpg?w=740&t=st=1688239261~exp=1688239861~hmac=b565bf97f04ef9db848d9272891a73e8168ee0650859be35e0de2927944cf5ba"
              alt="imgat"
              width={500}
              height={450}
              className={styles.ccimg}
            />
          </div>
          <form className={styles.ccform}>
            <input type="text" placeholder="Name" name="" />
            <input type="email" placeholder="Eamil" />
            <textarea
              name=""
              placeholder="Message"
              cols="30"
              rows="10"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Homepage;
