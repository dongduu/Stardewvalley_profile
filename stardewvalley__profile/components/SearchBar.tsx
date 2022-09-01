import styles from "../styles/SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <input placeholder="Search..." className={styles.input}></input>
        <button className={styles.button}>Search</button>
      </form>
    </div>
  );
}
