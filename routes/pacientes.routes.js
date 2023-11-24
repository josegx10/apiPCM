import router from "./router.js";
import { getPacientes, postPacientes, putPacientes } from "../controllers/pacientes.controllers.js";

const routerPacientes = router;
routerPacientes.get("/pacientes", getPacientes);
routerPacientes.post("/pacientes/", postPacientes);
routerPacientes.put("/pacientes/:id", putPacientes);


export default routerPacientes;