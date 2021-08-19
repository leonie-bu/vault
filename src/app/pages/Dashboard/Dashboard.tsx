import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import type { Credential } from '../../../types';

export default function Dashboard(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);

  // inside useEffect we want to
  // fetch credentials, then setCredentials to fetched credentials
  // callback fn, deps array

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch(`/api/credentials/`, {
        headers: {
          Authorization: 'Blumen',
        },
      });
      const credentials = await response.json();
      setCredentials(credentials);
    }
    fetchCredentials();
  }, []);

  return (
    <main className={styles.container}>
      <h1>Vault</h1>
      <p>Find your passwords</p>
      <Link to="/password/Leonie">Service</Link>
      <input />
      {credentials &&
        credentials.forEach((credential) => console.log(credential))}
    </main>
  );
}
