import styles from "./styles.module.css";
export function Input() {
  return (
    <input
      className={styles.input}
      autoFocus
      maxLength={1}
      placeholder="?"
      type="text"
    />
  );
}
