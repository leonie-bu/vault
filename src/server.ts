import express from 'express';
import {
  addCredential,
  getCredential,
  readCredentials,
} from './utils/credentials';

import type { Credential } from './types';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/api/credentials', async (_request, response) => {
  try {
    response.send(await readCredentials());
  } catch (error) {
    console.error(error);
    response.status(500).send(`Internal server error`);
  }
});

app.get('/api/credentials/:service', async (request, response) => {
  const { service } = request.params;
  try {
    const credential = await getCredential(service);
    response.status(200).json(credential);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find service: ${service}`);
  }
});

app.post('/api/credentials', async (request, response) => {
  const credential: Credential = request.body;
  await addCredential(credential);
  response.status(200).send(credential);
});

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
