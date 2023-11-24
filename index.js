import "dotenv/config"
import "./database.js"
import {port} from "./config.js"
import app from "./app.js"


app.listen(port, () => {
    console.log( `server on port ${port}`);
})