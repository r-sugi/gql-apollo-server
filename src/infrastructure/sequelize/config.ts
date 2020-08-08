export default {
  development: {
    dbName: "example",
    dbUser: "example",
    dbPassword: "example",
    options: {
      host: '127.0.0.1',
      dialect: "mysql",
      storage: "./dev_database.mysql",
      logging: false
    }
  },
  test: {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    opations: {
      dialect: "mysql",
      storage: "./test_database.mysql",
      logging: false
    }
  },
  production: {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    options: {
      dialect: "mysql",
      host: "localhost",
      storage: "./prod_database.mysql",
      logging: false,
      dialectOptions: {
        socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
      }
    }
  }
}
