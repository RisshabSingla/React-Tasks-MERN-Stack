import { useState } from "react";
import styles from "./Task1.module.css";

function Input({ setNumWords }) {
  const [words, setWords] = useState("");

  function handleInput(val) {
    setWords(val);
    const input = words.trim();
    const spaces = input.split("").filter((e) => e === " ").length;
    console.log(spaces);
    setNumWords(val === "" ? 0 : spaces + 1);
  }
  return (
    <div>
      <textArea
        className={styles.textArea}
        value={words}
        onChange={(e) => handleInput(e.target.value)}
      ></textArea>
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <h1>Responsive Paragraph Word Counter</h1>
    </header>
  );
}

function Counter({ numWords }) {
  return <div> Word Count: {numWords}</div>;
}

function Task1() {
  const [numWords, setNumWords] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Header />
        <main>
          <Input setNumWords={setNumWords} />
        </main>
        <Counter numWords={numWords} />
      </div>
    </div>
  );
}

export default Task1;
