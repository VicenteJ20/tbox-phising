const express = require("express");
const v1Routes = require("./v1/routes/routes");
require("dotenv").config();

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  
  app.use(proxy('/', {
    target: 'http://localhost:3000',
    changeOrigin: true,
  }))

  app.use("/", v1Routes);
  app.use(express.static('./src/public'))
  app.use("/Login", express.static("/public", { root: __dirname + "/public" }));

  app.disable('x-content-type-options');

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
