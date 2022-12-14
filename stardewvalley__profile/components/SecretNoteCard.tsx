import styles from "../styles/SecretNoteCard.module.scss";
import { MdArrowLeft, MdArrowRight } from "react-icons/Md";

export default function SecretNoteCard() {
  return (
    <>
      <div className={styles.box}>
        <MdArrowLeft size={120} className={styles.arrow_left} />
        <MdArrowRight size={120} className={styles.arrow_right} />
        <h2 className={styles.title}>Secret Note #1</h2>
        <div className={styles.content}>
          <p className={styles.contents}>
            애비게일의 일기장 한 페이지입니다. <br />
            '내가 사랑하는 것들 : 깍아낸 호박 냄새, 베개 밑에 둔 자수정, 초콜릿
            케이크,매콤한 장어의 스릴 그리고 엄마가 해주신 블랙베리 코블러가
            주는 편안함 (먹는게 좋은 걸!)'
          </p>
        </div>
      </div>
    </>
  );
}
