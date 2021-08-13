import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';
import { DB, Credential } from '../types';
import { encryptCredential, decryptCredential } from './crypto';

export async function readCredentials(): Promise<Credential[]> {
  const response = await readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials = db.credentials;
  return credentials;
}

export async function getCredential(
  service: string,
  key: string
): Promise<Credential> {
  const credentials = await readCredentials();
  const credential = credentials.find(
    (credential) => credential.service.toLowerCase() === service.toLowerCase()
  );

  if (!credential) {
    throw new Error(`No credential found for services: ${service}`);
  }
  const decryptedCredential = decryptCredential(credential, key);
  return decryptedCredential;
}

export async function addCredential(
  credential: Credential,
  key: string
): Promise<void> {
  const credentials = await readCredentials();
  const newCredentials = [...credentials, encryptCredential(credential, key)];
  const newDB: DB = {
    credentials: newCredentials,
  };
  const newJSON = JSON.stringify(newDB);
  await writeFile('src/db.json', newJSON, 'utf-8');
}

export async function deleteCredential(service: string): Promise<void> {
  const credentials = await readCredentials();
  const newCredentials = credentials.filter(
    (credential) => credential.service !== service
  );
  const newDB: DB = {
    credentials: newCredentials,
  };
  await writeFile('src/db.json', JSON.stringify(newDB), 'utf-8');
}

export async function updateCredential(
  service: string,
  credential: Credential,
  key: string
): Promise<void> {
  const credentials = await readCredentials();
  const filteredCredentials = credentials.filter(
    (credential) => credential.service !== service
  );
  const newDB: DB = {
    credentials: [...filteredCredentials, encryptCredential(credential, key)],
  };
  const stringifiedDB = JSON.stringify(newDB, null, 2);
  await writeFile('src/db.json', stringifiedDB);
}
