import React from 'react';
import styles from './Dashboard.module.css';

export default function Dashboard(): JSX.Element {
  return (
    <main className={styles.container}>
      <h1>Vault</h1>
      <p>Find your passwords</p>
      <input type="text"></input>
    </main>
  );
}
