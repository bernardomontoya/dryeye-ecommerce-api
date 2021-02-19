module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("APP_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "b6d6832765f402f014b346eea92cc1e8"),
    },
  },
});
