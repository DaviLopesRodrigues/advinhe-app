type Props = {
  correctGuess?: string;
};
import styles from "./styles.module.css";
export function Letter({ correctGuess }: Props) {
  return (
    <p className={correctGuess ? styles.letterCorrect : styles.letter}>
      {correctGuess}
    </p>
  );
}
