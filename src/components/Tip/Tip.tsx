import tipIcon from "/tip-icon.svg";
import styles from "./styles.module.css";

type Props = {
  tip: string;
};

function Tip({ tip }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.tipIcon}>
        <img src={tipIcon} alt="" />
      </div>
      <div className={styles.tip}>
        <p>Dica</p>
        <p>{tip}</p>
      </div>
    </div>
  );
}

export { Tip };
