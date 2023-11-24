import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import routerCitas from "./routes/citas.routes.js";
import routerPacientes from "./routes/pacientes.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routerCitas);
app.use("/api", routerPacientes);


export default app;
