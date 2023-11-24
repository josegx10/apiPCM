import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


export default app;