import tipIcon from "/tip-icon.svg";
import styles from "./styles.module.css";

function Tip() {
  return (
    <div className={styles.container}>
      <div className={styles.tipIcon}>
        <img src={tipIcon} alt="" />
      </div>
      <div className={styles.tip}>
        <p>Dica</p>
        <p>Biblioteca para criar interfaces Web com Javascript.</p>
      </div>
    </div>
  );
}

export { Tip };
