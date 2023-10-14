import { useState } from "react";
import styles from "./Task3.module.css";

function PickAColor({ setOpen }) {
  return (
    <div className={styles.pickDiv}>
      <button className={styles.pick_btn} onClick={() => setOpen(true)}>
        {" "}
        Pick a Color
      </button>
    </div>
  );
}

function ColorBox({ setSelectedColor, setOpen }) {
  function generateRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // console.log(bgColor);
    return bgColor;
  }
  const bgColor = generateRandomColor();
  return (
    <div>
      <button
        className={styles.colorBox}
        style={{ backgroundColor: `${bgColor}` }}
        onClick={() => {
          setSelectedColor(bgColor);
          setOpen(false);
        }}
      ></button>
    </div>
  );
}

function ColorBar({ open, setSelectedColor, setOpen }) {
  // console.log(open);
  return !open ? (
    <div></div>
  ) : (
    <div className={styles.colorBar}>
      {Array.from({ length: 15 }).map((_, i) => {
        return (
          <ColorBox
            setSelectedColor={setSelectedColor}
            setOpen={setOpen}
            key={i}
          />
        );
      })}
      <p></p>
    </div>
  );
}

function Task3() {
  const [color, setColor] = useState("beige");
  const [colorBarOpen, setColorBarOpen] = useState(true);
  return (
    <div style={{ backgroundColor: `${color}` }}>
      <header className={styles.header}> Color Picker</header>
      <div className={styles.box}>
        <div className={styles.outerbox}>
          <ColorBar
            open={colorBarOpen}
            setSelectedColor={setColor}
            setOpen={setColorBarOpen}
          />
          <PickAColor setOpen={setColorBarOpen} />
        </div>
      </div>
    </div>
  );
}

export default Task3;
