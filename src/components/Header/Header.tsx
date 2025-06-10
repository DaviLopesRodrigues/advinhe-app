import advinheLogo from "/advinhe-logo.svg";
import restartIcon from "/restart-icon.svg";

import styles from "./styles.module.css";

type Props = {
  current: number;
  max: number;
  onRestartGame: () => void;
};

function Header({ current, max, onRestartGame }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={advinheLogo} />
      </div>
      <div className={styles.attempts}>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>
        <img src={restartIcon} onClick={onRestartGame} />
      </div>
    </div>
  );
}

export { Header };
