export default {
  development: {
    host: '127.0.0.1',
    dialect: "mysql",
    storage: "./dev_database.mysql",
    logging: false
  },
  test: {
    dialect: "mysql",
    storage: "./test_database.mysql",
    logging: false
  },
  production: {
    dialect: "mysql",
    storage: "./prod_database.mysql",
    logging: false
  }
}
