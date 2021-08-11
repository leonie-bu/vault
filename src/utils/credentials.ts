import { writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';
import { DB, Credential } from '../types';

export async function readCredentials(): Promise<Credential[]> {
  const response = await readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials = db.credentials;
  return credentials;
}

export async function getCredential(service: string): Promise<Credential> {
  const credentials = await readCredentials();
  const credential = credentials.find(
    (credential) => credential.service.toLowerCase() === service.toLowerCase()
  );

  if (!credential) {
    throw new Error(`No credential found for services: ${service}`);
  }
  return credential;
}

export async function addCredential(credential: Credential): Promise<void> {
  const credentials = await readCredentials();
  const newCredentials = [...credentials, credential];
  const newDB: DB = {
    credentials: newCredentials,
  };
  const newJSON = JSON.stringify(newDB);
  return writeFile('./src/db.json', newJSON, 'utf-8');
}
