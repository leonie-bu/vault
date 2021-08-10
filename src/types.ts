export type DB = {
  credentials: Credential[];
};

export type Credential = {
  service: string;
  name: string;
  password: string;
};
