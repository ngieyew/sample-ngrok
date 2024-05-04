const ngrok = require("ngrok");
const config = require("./config");

ngrok
  .connect(config.ngrok)
  .then((url) => {
    console.log(`Server is publicly accessible at ${url}`);
  })
  .catch((error) => {
    console.error(`Failed to start ngrok tunnel: ${error}`);
  });
