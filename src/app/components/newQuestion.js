"use client";

import styles from "./replyed.module.css";
import useSWR from "swr";
import Answer from "./answer";

export default function NewQuestion() {
  const fetcher = (...args) =>
    fetch(...args, {
      credentials: "include",
      next: { revalidate: 0 },
    })
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, err } = useSWR(
    `${process.env.API_SERVER}/api/newQuestion`,
    fetcher,
    {
      refreshInterval: 0,
    }
  );

  if (!data) return <p>Loading...</p>;

  return (
    <div className="inner">
      {data.map((e) => {
        return (
          <div className={styles.box} key={e.idx}>
            <div className={styles["question-top"]}>
              <div className={styles["questioner-profile"]}></div>
              <span className={styles.questioner}>{e.questioner}</span>
              <span className={styles["quesion-date"]}>
                {e.dt.substring(0, 11)}
              </span>
            </div>
            <div className={styles.question}>{e.content}</div>
            <Answer idx={e.idx} />
          </div>
        );
      })}
    </div>
  );
}
