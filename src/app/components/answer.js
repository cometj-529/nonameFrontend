import { useRouter } from "next/navigation";
import styles from "./answer.module.css";

export default function Answer(props) {
  const router = useRouter();

  const process = (e) => {
    e.preventDefault();

    fetch(`${process.env.API_SERVER}/saveAnswer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: props.idx,
        answer: e.target.answer.value,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert("저장 실패");
        }

        router.refresh();
      });
  };

  return (
    <form className={styles.form} onSubmit={process}>
      <textarea className={styles.answer} name="answer"></textarea>
      <button className={styles.button}>답변하기</button>
    </form>
  );
}
