import React from 'react';
import styles from './Dashboard.module.css';

export default function Dashboard(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Vault</h1>
        <p className={styles.text}>Find your passwords</p>
        <input type="text" className={styles.input}></input>
      </div>
    </>
  );
}
