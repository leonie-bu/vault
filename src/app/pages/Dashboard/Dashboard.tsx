import React from 'react';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';

export default function Dashboard(): JSX.Element {
  return (
    <main className={styles.container}>
      <h1>Vault</h1>
      <Link to="/password/:service">Pa</Link>
      <p>Find your passwords</p>
      <input type="text"></input>
    </main>
  );
}
