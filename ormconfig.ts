module.exports = {
  type: `${process.env.DBTYPE}`,
  host: `${process.env.PGHOST}`,
  port: `${process.env.PGPORT}`,
  username: `${process.env.PGUSER}`,
  password: `${process.env.PGPASSWORD}`,
  database: `${process.env.PGDATABASE}`,
  entities: [`${process.env.DATABASE_ENTITIES}`],
  migrations: [`${process.env.DATABASE_MIGRATIONS}`],
  cli: {
    migrationsDir: `${process.env.DATABASE_MIGRATIONS_DIR}`,
  },
};
