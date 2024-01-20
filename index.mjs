import pkg from 'pg';
export const handler = async (event) => {
  const { Client } = pkg;
  const client = new Client({
    host: 'http://',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    ssl: {
      rejectUnauthorized: false,
    },
  })
  await client.connect()

  const sql = `INSERT INTO public."User"(id, name) VALUES (3, 'user3')`

  const res = await client.query(sql)

  await client.end()
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(res),
  };
  return response;
};