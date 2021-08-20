import React from 'react';
import styles from './AddService.module.css';

export default function AddService(): JSX.Element {
  return (
    <main className={styles.container}>
      <h1>Vault</h1>
      <h3>
        Fill in the following fields to save your passwords for a certain
        service
      </h3>
      <input className={styles.input} placeholder={'Enter service'} />
      <input placeholder={'Enter name or email address'} />
      <input placeholder={'Enter password'} />
      <input placeholder={'Enter masterpassword'} />
    </main>
  );
}
