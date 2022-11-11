import pg from "pg";

const pgString =
  "postgres://postgres:JBm1P6YD712Z6jr@recommendation-backend-db.internal:5432";

const client = new pg.Client(pgString);

client.connect();

export { client };

// Postgres cluster recommendation-backend-db created
//   Username:    postgres
//   Password:    JBm1P6YD712Z6jr
//   Hostname:    recommendation-backend-db.internal
//   Proxy port:  5432
//   Postgres port:  5433
//   Connection string: postgres://postgres:JBm1P6YD712Z6jr@recommendation-backend-db.internal:5432
