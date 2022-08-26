import styles from "../styles/DetailCard.module.scss";

export default function DetailCard() {
  return (
    <div className={styles.box}>
      <h2 className={styles.name}>Harvey</h2>
      <div className={styles.profile}>
        <ul className={styles.ul}>
          <li className={styles.li}>brith: 14 winter</li>
          <li className={styles.li}>job: doctor</li>
          <li className={styles.li}>family: X</li>
          <li className={styles.li}>friends: Maru</li>
        </ul>
        <img
          className={styles.img}
          src="https://w.namu.la/s/2f015d5f3bef253a62c2c1c7597afc0250e1afb58fb35706be401b14b28160cb8913a14d3f757ce4dc43158eb43254ad468559ff2d2bebe2d29e97632256b30836872a84af4aeb2ebff7cc2334ead4c432a6f3063147020b4bf98e7776e7ef6f"
        />
      </div>

      <hr />

      <section className={styles.section}>
        <h3 className={styles.section__name}>사랑하는 선물</h3>
        <ul className={styles.section__context}>
          <li>커피</li>
          <li>피클</li>
          <li>토끼발</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.section__name}>좋아하는 선물</h3>
        <ul>
          <li>리크</li>
          <li>눈마</li>
          <li>회</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.section__name}>평범한 선물</h3>
        <ul>
          <li>계란류</li>
          <li>우유</li>
          <li>홉</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.section__name}>싫어하는 선물</h3>
        <ul>
          <li>빵</li>
          <li>치즈</li>
          <li>쿠키</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.section__name}>혐오하는 선물</h3>
        <ul>
          <li>산호</li>
          <li>잉어</li>
          <li>백금향</li>
        </ul>
      </section>
    </div>
  );
}
