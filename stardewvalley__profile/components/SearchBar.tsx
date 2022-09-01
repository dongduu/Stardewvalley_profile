import styles from "../styles/SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.box}>
      <div className={styles.form}>
        <input
          type="search"
          placeholder="Search..."
          className={styles.input}
        ></input>
        <button className={styles.button}>Search</button>
      </div>
    </div>
  );
}
