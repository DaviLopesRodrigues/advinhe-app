import advinheLogo from "/advinhe-logo.svg";
import restartIcon from "/restart-icon.svg";

import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={advinheLogo} />
      </div>
      <div className={styles.attempts}>
        <span>
          <strong>5</strong> de 10 tentativas
        </span>
        <img src={restartIcon} />
      </div>
    </div>
  );
}

export { Header };
