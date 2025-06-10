import "./global.css";
import styles from "./app.module.css";
import { Header } from "./components/Header/Header";
import { Tip } from "./components/Tip/Tip";
import { Letter } from "./components/Letter/Letter";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Tip />
      <div className={styles.letter}>
        <Letter correctGuess="R" />
        <Letter correctGuess="" />
        <Letter correctGuess="" />
        <Letter correctGuess="" />
        <Letter correctGuess="" />
      </div>
    </div>
  );
}

export { App };
