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
    dbName: "example",
    dbUser: "example",
    dbPassword: "example",
    opations: {
      dialect: "mysql",
      storage: "./test_database.mysql",
      logging: false
    }
  },
  production: {
    dbName: "example",
    dbUser: "example",
    dbPassword: "example",
    options: {
      dialect: "mysql",
      storage: "./prod_database.mysql",
      logging: false
    }
  }
}
