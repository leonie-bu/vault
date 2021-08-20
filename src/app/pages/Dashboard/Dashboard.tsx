import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import type { Credential } from '../../../types';
import CredentialCard from '../../components/CredentialCard/CredentialCard';

export default function Dashboard(): JSX.Element {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [masterPassword, setmasterPassword] = useState('');

  useEffect(() => {
    async function fetchCredentials() {
      const response = await fetch(`/api/credentials/`, {
        headers: {
          Authorization: masterPassword,
        },
      });
      const credentials = await response.json();
      setCredentials(credentials);
    }
    fetchCredentials();
    if (!masterPassword) {
      setCredentials([]);
    }
  }, [masterPassword]);

  return (
    <main className={styles.container}>
      <h1>Vault</h1>
      <p>Find your passwords</p>
      <Link to="/password/Leonie">Service</Link>
      <input
        type="Password"
        value={masterPassword}
        onChange={(event) => setmasterPassword(event.target.value)}
      />
      {credentials.length !== 0 &&
        credentials.map((credential) => (
          <CredentialCard credentialData={credential} />
        ))}
    </main>
  );
}
