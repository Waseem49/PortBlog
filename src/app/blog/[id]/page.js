import React from "react";
import Image from "next/image";
import styles from "@/app/blog/blog.module.css";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
  };
}
const SingleBlogPage = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.contenet}>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <div className={styles.admin}>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/003/521/522/large_2x/angry-werewolf-on-red-blood-moon-illustration-free-vector.jpg"
              alt=""
              width={50}
              height={30}
            />
            <span>Admin</span>
          </div>
        </div>
        <div className={styles.imgcon}>
          <Image
            src="https://static.vecteezy.com/system/resources/previews/003/521/522/large_2x/angry-werewolf-on-red-blood-moon-illustration-free-vector.jpg"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <p className={styles.p}>{data.content}</p>
    </div>
  );
};

export default SingleBlogPage;
