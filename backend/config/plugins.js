module.exports = ({ env }) => ({
  "random-sort": {
    enabled: true,
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "pedobirandfriends@gmail.com",
        defaultReplyTo: "pedobirandfriends@gmail.com",
      },
    },
  },
});
