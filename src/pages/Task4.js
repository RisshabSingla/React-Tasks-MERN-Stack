import styles from "./Task4.module.css";
import { useEffect, useState } from "react";

function TableRow({ data }) {
  return (
    <tr>
      <td> {data.id}</td>
      <td className={styles.td}>
        <img src={data.image} alt="Img"></img>
      </td>
      <td> {data.firstName}</td>
      <td> {data.lastName}</td>
      <td> {data.gender}</td>
      <td> {data.email}</td>
      <td> {data.username}</td>
      <td> {data.domain}</td>
      <td> {data.ip}</td>
      <td> {data.university}</td>
    </tr>
  );
}

function TableHeading() {
  return (
    <tr>
      <th> Id</th>
      <th> Profile</th>
      <th> FirstName</th>
      <th> LastName</th>
      <th> Gender</th>
      <th> Email</th>
      <th> Username</th>
      <th> Domain</th>
      <th> Id</th>
      <th> University</th>
    </tr>
  );
}

function Task4() {
  const [data, setData] = useState([]);

  useEffect(function () {
    async function fetchRecords() {
      try {
        const res = await fetch(`https://dummyjson.com/users`);
        const resp = await res.json();
        console.log(resp.users);
        setData(resp.users);
      } catch {
        return [];
      }
    }
    fetchRecords();
  }, []);

  return (
    <div className={styles.main}>
      <header className={styles.header}> Dummy Data</header>
      <div className={styles.box}>
        <div className={styles.outerbox}>
          {data.length === 0 ? (
            <div> LOADING </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <TableHeading />
              </thead>
              <tbody>
                {data.map((row) => {
                  return <TableRow data={row} key={row.id} />;
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task4;
