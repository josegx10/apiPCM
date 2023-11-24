import router from "./router.js";
import { getCitas, postCitas } from "../controllers/citas.controllers.js";

const routerCitas = router;
routerCitas.get("/citas", getCitas);
routerCitas.post("/citas/", postCitas);

export default routerCitas;