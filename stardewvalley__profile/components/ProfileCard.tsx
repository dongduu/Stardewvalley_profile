import styles from "../styles/Character.module.scss";

export default function ProfileCard() {
  return (
    <div className={styles.box}>
      <div>
        <img
          className={styles.profile_img}
          src="https://w.namu.la/s/2f015d5f3bef253a62c2c1c7597afc0250e1afb58fb35706be401b14b28160cb8913a14d3f757ce4dc43158eb43254ad468559ff2d2bebe2d29e97632256b30836872a84af4aeb2ebff7cc2334ead4c432a6f3063147020b4bf98e7776e7ef6f"
        />
        <h2 className={styles.profile_name}>Harvey</h2>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>brith: 14 winter</li>
        <li className={styles.li}>job: doctor</li>
        <li className={styles.li}>family: X</li>
        <li className={styles.li}>friends: Maru</li>
      </ul>
      <div className={styles.plus}>+</div>
    </div>
  );
}
