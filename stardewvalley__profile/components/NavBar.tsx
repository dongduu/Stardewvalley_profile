import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.scss";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.box}>
      <Link href="/">
        <img
          className={styles.logo}
          src="https://stardewvalley.net/wp-content/uploads/2017/12/med_logo.png"
          alt="logo"
        />
      </Link>
      <div className={styles.item}>
        <Link href="/">
          <a
            className={`${styles.link} ${
              router.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/detail">
          <a
            className={`${styles.link} ${
              router.pathname === "/detail" ? styles.active : ""
            }`}
          >
            Detail
          </a>
        </Link>
        <Link href="/secretNote">
          <a
            className={`${styles.link} ${
              router.pathname === "/secretNote" ? styles.active : ""
            }`}
          >
            SecretNote
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`${styles.link} ${
              router.pathname === "/about" ? styles.active : ""
            }`}
          >
            About
          </a>
        </Link>
        <Link href="https://www.stardewvalley.net/blog/">
          <a>
            <img
              className={styles.homepage}
              src="https://secure.gravatar.com/avatar/f7ef77bb41d38cd162fceb30625d6289?s=75&d=http%3A%2F%2Fwww.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D75&r=G"
              alt="homepage"
            />
          </a>
        </Link>
      </div>
    </nav>
  );
}
