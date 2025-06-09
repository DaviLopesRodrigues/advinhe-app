import "./global.css";
import styles from "./app.module.css";
import { Header } from "./components/Header/Header";
import { Tip } from "./components/Tip/Tip";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Tip />
    </div>
  );
}

export { App };
