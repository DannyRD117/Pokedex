import Navbar from "./components/Navbar/Navbar";
import Pages from "./pages/Pages";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <Pages />
      </main>
    </div>
  );
}

export default App;
