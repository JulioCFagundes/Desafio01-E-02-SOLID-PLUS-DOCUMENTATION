// eslint-disable-next-line import-helpers/order-imports
import express from "express";

// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
