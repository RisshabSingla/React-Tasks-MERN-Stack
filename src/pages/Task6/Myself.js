import styles from "./Myself.module.css";

function Myself() {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <p> Hi there, I'm</p>
        <p> Risshab Singla</p>
        <p> Full Stack Developer </p>
      </div>
      <div className={styles.intro}>
        <span>Passionate about Web-Development and Data Structures</span>
      </div>
      <div className={styles.reach}> </div>
    </div>
  );
}

export default Myself;
