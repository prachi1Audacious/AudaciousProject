import cors from "cors";
import express from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import morgan from "morgan";
import router from "./routes";
import logger from "./utils/logger";
import seeder from "../src/seeder/seed"
import mongoose from "../src/config/config"
import dotenv from "dotenv"


dotenv.config()
const options = {
  info: {
    version: "1.0.0",
    title: "Node Sample API",
    description: "Node Sample API documentation",
  },
  security: {
    BearerAuth: {
      type: "http",
      scheme: "bearer",
    },
  },
  baseDir: __dirname,
  filesPattern: [
    "./controllers/*.js",
    "./utils/*.schema.js",
    "./routes/index.js",
  ],
  swaggerUIPath: "/api-docs",
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: "/api-docs",
  notRequiredAsNullable: false,
  swaggerUiOptions: {
    customSiteTitle: "API Doc",
  },
};

const app = express();

expressJSDocSwagger(app)(options);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms", {
    stream: logger.stream,
  })
);
app.use(cors())
app.use("/v1", router);
app.use((req, res) =>
  res.status(200).json({ message: "API servier is working fine" })
);
app.use(seeder);

const port = process.env.PORT || 8080;

app
  .listen(port)
  .on("listening", () => {
    logger.info(`🚀Process started on port ${port}!🚀 `);
  })
  .on("error", (error) => {
    logger.error(`An error occured while starting server`);
    logger.error(error);
  });
