const http = require("http");

require("dotenv").config({
  path:
    process.env.NODE_ENV === "test"
      ? ".env.test"
      : process.env.NODE_ENV === "production"
      ? ".env.prod"
      : ".env",
});

console.log("MONGO_URL:", process.env.MONGO_URL);

const { mongoConnect } = require("./services/mongo");
const { loadPlanetData } = require("./model/planets.model");
const { loadLunchesData } = require("./model/launches.model");

const app = require("./app");
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

console.log(process.env.PORT);

async function startServer() {
  await mongoConnect();
  await loadPlanetData();
  await loadLunchesData();
  server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
}

startServer();
