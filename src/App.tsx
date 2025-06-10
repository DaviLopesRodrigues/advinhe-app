import "./global.css";
import styles from "./app.module.css";
import { Header } from "./components/Header/Header";
import { Tip } from "./components/Tip/Tip";
import { Letter } from "./components/Letter/Letter";
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { Button } from "./components/Button/Button";

function App() {
  const [attempts, setAttempts] = useState<number>(5);
  const handleRestartGame = () => {
    setAttempts(0);
  };
  return (
    <div className={styles.container}>
      <Header current={attempts} max={10} onRestartGame={handleRestartGame} />
      <Tip tip="Biblioteca para criar interfaces Web com Javascript." />
      <div className={styles.word}>
        <Letter correctGuess="R" />
        <Letter correctGuess="" />
        <Letter correctGuess="" />
        <Letter correctGuess="" />
        <Letter correctGuess="" />
      </div>
      <div className={styles.guess}>
        <p>Palpite</p>
        <div>
          <Input />
          <Button />
        </div>
      </div>
    </div>
  );
}

export { App };
