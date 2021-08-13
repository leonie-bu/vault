import { readFile } from 'fs/promises';

export async function validateMasterpassword(
  masterpassword: string
): Promise<boolean> {
  // read hashed masterpassword from .password
  const hashedMasterpassword = await readFile('.password', 'utf-8');

  // hash password argument
  const hashedPassword = CryptoJS.SHA256(masterpassword).toString();

  // compare hashedMasterpassword with password and return the outcome
  return hashedMasterpassword === hashedPassword;
}
