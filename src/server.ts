import { readCredentials } from './utils/credentials';

console.log(readCredentials);

// import { readFile } from 'fs';

// // const fs = require('fs'); --> require ist veraltet

// readFile('./db.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// import { readFile } from 'fs/promises';

// async function readPasswords() {
//   const db = await readFile('src/db.json', 'utf-8');
//   console.log(db);
// }
// readPasswords();

// await readfile gibt mir ein promise zurück.
// bis ich das promise bekomme muss ich warten.
