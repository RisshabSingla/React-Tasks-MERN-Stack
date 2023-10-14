import { useState } from "react";
import styles from "./Task2.module.css";

function Input({ input }) {
  return <div className={styles.topDisp}>{input}</div>;
}

function Result({ result }) {
  return <div className={styles.topDisp}>{result}</div>;
}

function Numbers({ val, setInput, setResult }) {
  function handleClick() {
    setResult("");
    setInput((e) => (e ? e + val : val));
  }
  return (
    <div>
      <button className={styles.btn} onClick={handleClick}>
        {val}
      </button>
    </div>
  );
}

function BackSpace({ setInput, setResult }) {
  function handleClick() {
    setInput((e) => (e ? e.slice(0, -1) : ""));
    setResult("");
  }
  return (
    <div>
      <button className={styles.btn} onClick={handleClick}>
        Back
      </button>
    </div>
  );
}

function EqualButton({ setResult, input, setInput }) {
  function handleClick() {
    try {
      const ans = eval(input);
      setResult(ans);
    } catch {
      setResult("Invalid");
    } finally {
      setInput("");
    }
  }
  return (
    <div>
      <button className={styles.btn} onClick={handleClick}>
        =
      </button>
    </div>
  );
}

function KeyPad({ setInput, setResult, input }) {
  return (
    <div>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <Numbers val={"7"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"8"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"9"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <BackSpace setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"4"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"5"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"6"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          {" "}
          <Numbers val={"/"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"1"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"2"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"3"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"*"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"0"} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"."} setInput={setInput} setResult={setResult} />
        </div>
        <div className={styles.grid_item}>
          <EqualButton
            setResult={setResult}
            input={input}
            setInput={setInput}
          />
        </div>
        <div className={styles.grid_item}>
          <Numbers val={"+"} setInput={setInput} setResult={setResult} />
        </div>
      </div>
    </div>
  );
}

function Task2() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className={styles.container}>
      <header>Calculator</header>
      <div className={styles.calculator}>
        <Input input={input} />
        <Result result={result} />
        <KeyPad setInput={setInput} setResult={setResult} input={input} />
      </div>
    </div>
  );
}

export default Task2;
