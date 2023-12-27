"use client";

import Link from "next/link";
import styles from "./header.module.css";
import useSWR from "swr";

export default function Header() {
  const fetcher = (...args) =>
    fetch(...args, { credentials: "include" }).then((res) => res.json());

  const { data, err } = useSWR(
    `${process.env.API_SERVER}/api/session`,
    fetcher
  );

  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        <h1>
          <Link href="/">NoName</Link>
        </h1>
        <ul className={styles["sub-menu"]}>
          <li>
            {data ? (
              data.success ? (
                <Link href="/logout">로그아웃</Link>
              ) : (
                <Link href="/login">로그인</Link>
              )
            ) : (
              <Link href="/login">로그인</Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
