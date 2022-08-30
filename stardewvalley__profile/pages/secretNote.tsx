import SecretNoteCard from "../components/SecretNoteCard";
import Seo from "../components/Seo";
import styles from "../styles/SecretNoteCard.module.scss";

export default function secretNote() {
  return (
    <div>
      <Seo title="secretNote" />
      <div className={styles.flexBox}>
        <SecretNoteCard />
        <SecretNoteCard />
        <SecretNoteCard />
        <SecretNoteCard />
        <SecretNoteCard />
        <SecretNoteCard />
        <SecretNoteCard />
        <SecretNoteCard />
      </div>
    </div>
  );
}
