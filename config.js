module.exports = {
  ngrok: {
    authtoken: process.env.NGROK_AUTHTOKEN,
    addr: process.env.PORT || 3000,
    hostname: process.env.NGROK_HOSTNAME,
  },
  port: process.env.PORT || 3000,
};
