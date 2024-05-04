require("dotenv").config();
require("./server");

if (process.env.NODE_ENV !== "production") {
  require("./ngrok");
}
