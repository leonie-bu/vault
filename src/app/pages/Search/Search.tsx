import React, { useState } from 'react';
import styles from './Search.module.css';
import CredentialCard from '../../components/CredentialCard/CredentialCard';
import { Credential } from '../../../types';

export default function Search(): JSX.Element {
  const [service, setService] = useState<string>('');
  const [masterPassword, setMasterpassword] = useState<string>('');
  const [credential, setCredential] = useState<Credential | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch(`/api/credentials/${service}`, {
      headers: { Authorization: masterPassword },
    });
    if (!response.ok) {
      setIsError(true);
      console.log('Credential not found');
      return;
    }
    setIsError(false);
    const credential: Credential = await response.json();
    setCredential(credential);
  }

  return (
    <main className={styles.container}>
      <h1>Vault</h1>
      {credential ? (
        <CredentialCard credentialData={credential} />
      ) : (
        <form
          className={styles.container}
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            onChange={(event) => setService(event.target.value)}
            value={service}
            placeholder={'Service'}
            type="text"
          />
          <input
            onChange={(event) => setMasterpassword(event.target.value)}
            value={masterPassword}
            placeholder={'Masterpassword'}
            type="text"
          />
          <input value={'Search for it'} placeholder={'Submit'} type="submit" />
        </form>
      )}
      {isError && <p>Something went wrong!</p>}
    </main>
  );
}
