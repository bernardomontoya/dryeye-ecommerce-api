module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: env("DATABASE_HOST", "127.0.0.1"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "strapi"),
            username: env("DATABASE_USERNAME", ""),
            password: env("DATABASE_PASSWORD", ""),
          },
          options: {
            ssl: false,
            debug: true,
            pool: {
              min: 0,
              max: 10,
              idleTimeoutMillis: 30000,
              createTimeoutMillis: 30000,
              acquireTimeoutMillis: 30000,
            },
          },
        },
      },
    };
  }
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "sqlite",
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
