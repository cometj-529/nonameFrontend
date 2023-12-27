import { useRouter } from "next/navigation";
import styles from "./questionPost.module.css";

export default function QuestionPost() {
  const router = useRouter();

  const process = (e) => {
    e.preventDefault();

    fetch(`${process.env.API_SERVER}/saveQuestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: e.target.content.value,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert("저장 실패");
        }

        e.target.content.value = "";
        router.refresh();
      });
  };

  return (
    <form className={styles.box} onSubmit={process}>
      <div className="inner">
        <textarea
          className={styles.question}
          name="content"
          placeholder="질문을 입력해주세요"
        ></textarea>
      </div>
      <button className={styles.button}>전송</button>
    </form>
  );
}
