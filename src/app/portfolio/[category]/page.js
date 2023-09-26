import React from "react";
import styles from "@/app/portfolio/[category]/cat.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1>{params.category}</h1>
      {data.map((it) => (
        <div className={styles.item} key={it._id}>
          <div className={styles.contenet}>
            <h1>{it.title}</h1>
            <p>{it.desc}</p>
            <button>See More</button>
          </div>
          <div className={styles.imgcon}>
            <Image
              src={it.image}
              alt="image"
              fill={true}
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
