"use client";

import styles from "./replyed.module.css";
import useSWR from "swr";

export default function Replyed() {
  const fetcher = (...args) =>
    fetch(...args, {
      next: { revalidate: 0 },
    })
      .then((res) => res.json())
      .then((res) => res.data);

  const { data, err } = useSWR(
    `${process.env.API_SERVER}/api/replyed`,
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
                {e.qdt.substring(0, 11)}
              </span>
            </div>
            <div className={styles.question}>{e.content}</div>
            <div>
              <div className={styles["answer-top"]}>
                <div className={styles["host-profile"]}></div>
                <span className={styles.host}>해성</span>
                <span className={styles["answer-date"]}>
                  {e.adt.substring(0, 11)}
                </span>
              </div>
              <div className={styles.answer}>{e.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
