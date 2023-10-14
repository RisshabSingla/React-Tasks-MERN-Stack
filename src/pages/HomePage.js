import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <container className={styles.container}>
        <table className={styles.table}>
          <tr className={styles.tableRow}>
            <th> Task No</th>
            <th> Task Title</th>
            <th> Task Link</th>
          </tr>
          <tr>
            <th> 1. </th>
            <th> Responsive Paragraph Counter</th>
            <th>
              <Link to="./task1">Task1</Link>
            </th>
          </tr>

          <tr>
            <th> 2. </th>
            <th> Calculator</th>
            <th>
              <Link to="./task2">Task2</Link>
            </th>
          </tr>

          <tr>
            <th> 3. </th>
            <th> Color Picker</th>
            <th>
              <Link to="./task3">Task3</Link>
            </th>
          </tr>

          <tr>
            <th> 4. </th>
            <th> Record Fetch</th>
            <th>
              <Link to="./task4">Task4</Link>
            </th>
          </tr>

          <tr>
            <th> 5. </th>
            <th> Age Calculator</th>
            <th>
              <Link to="./task5">Task5</Link>
            </th>
          </tr>

          <tr>
            <th> 6. </th>
            <th> PortFolio</th>
            <th>
              <Link to="./task6">Task6</Link>
            </th>
          </tr>
        </table>
      </container>
    </div>
  );
}

export default HomePage;
