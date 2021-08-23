import React, { useState } from 'react';
import styles from './AddService.module.css';

export default function AddService(): JSX.Element {
  const [service, setService] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [masterpassword, setMasterpassword] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newCredential = {
      service: service,
      name: name,
      password: password,
    };
    await fetch('/api/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: masterpassword,
      },
      body: JSON.stringify(newCredential),
    });
  }

  return (
    <main className={styles.container}>
      <h1>Vault</h1>
      <h3>Fill in the following fields</h3>
      <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
        <input
          className={styles.input}
          placeholder={'Enter service'}
          type="text"
          value={service}
          onChange={(event) => setService(event.target.value)}
          required
        />
        <input
          className={styles.input}
          placeholder={'Enter name'}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          className={styles.input}
          placeholder={'Enter password'}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <input
          className={styles.input}
          placeholder={'Enter masterpassword'}
          type="password"
          value={masterpassword}
          onChange={(event) => setMasterpassword(event.target.value)}
          required
        />
        <input className={styles.submit} value={'Submit'} type="submit" />
      </form>
    </main>
  );
}
