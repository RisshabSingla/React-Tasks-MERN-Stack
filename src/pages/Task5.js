import styles from "./Task5.module.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

function GetCalendar({ onChange, value }) {
  return (
    <div>
      {/* <Calendar onChange={onChange} value={value} /> */}
      <DatePicker selected={value} onChange={(date) => onChange(date)} />
    </div>
  );
}

function Task5() {
  const [value, setValue] = useState(new Date());
  const [ans, setAns] = useState(-1);

  function handleClick() {
    // console.log(value);
    // console.log(new Date());
    const age = Math.trunc((new Date() - value) / (1000 * 60 * 60 * 24 * 365));
    console.log(age);
    setAns(age);
  }

  return (
    <div>
      <header className={styles.header}> Age Calculator</header>
      <div className={styles.box}>
        <div className={styles.outerbox}>
          <div className={styles.mainText}>Enter your date of birth</div>
          <div className={styles.calendar}>
            <GetCalendar onChange={setValue} value={value} />
          </div>
          <div className={styles.dispAns}>
            <button className={styles.btn} onClick={() => handleClick()}>
              {" "}
              Calculate Age
            </button>
          </div>

          <div className={styles.dispAns}>
            <p className={styles.ansP}>
              {ans === -1
                ? "Please press the Button to know your age"
                : `You are ${ans} years old`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task5;
