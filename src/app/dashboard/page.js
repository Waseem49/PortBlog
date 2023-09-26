"use client";
import React from "react";
import styles from "@/app/dashboard/dashboard.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data, error, isLoading);
  const handlesubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      e.target.reset();
      mutate();
    } catch (error) {
      alert(error.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      alert(error.message);
    }
  };
  if (session.status === "loading") {
    return <p>Loading</p>;
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <div className={styles.main}>
        <div className={styles.postcon}>
          {data?.data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                {/* <Image src={post.img} alt="" width={200} height={100} /> */}
              </div>
              <h2 className={styles.postTitle}>
                {post?.title.substring(0, 16)}...
              </h2>
              <span
                className={styles.delete}
                onClick={() => handleDelete(post._id)}>
                X
              </span>
            </div>
          ))}
        </div>
        <div>
          <div className={styles.formcon}>
            <h3 className={styles.h33}>Add new post</h3>
            <form className={styles.form} onSubmit={handlesubmit}>
              <input type="text" name="title" placeholder="Title" />
              <input type="text" name="desc" placeholder="Description" />
              <input type="text" name="content" placeholder="Content" />
              <input type="text" name="img" placeholder="Image" />
              <button className={styles.btn}>Create Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
