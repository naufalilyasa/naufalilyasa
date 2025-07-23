import "dotenv/config.js";
import config from "config/config.js";

import app from "./app.js";

const port = config.port;

app.listen(port, () => {
  console.log(`Listening to port ${String(port)}`);
});
