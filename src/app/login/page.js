"use client";

import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function Login() {
  const router = useRouter();

  const process = (e) => {
    e.preventDefault();

    fetch(`${process.env.API_SERVER}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: e.target.id.value,
        password: e.target.password.value,
      }),
      credentials: "include",
      withCredentials: true,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          router.push("/");
        } else {
          alert("로그인 실패");
          router.refresh();
        }
      });
  };

  return (
    <form className={styles.box} onSubmit={process}>
      <input
        type="text"
        name="id"
        className={styles.input}
        placeholder="아이디"
      />
      <input
        type="password"
        name="password"
        className={styles.input}
        placeholder="비밀번호"
      />
      <input type="submit" className={styles.button} value="로그인" />
    </form>
  );
}
