import router from "./router.js";
import { getCitas, postCitas, putCitas, deleteCitas } from "../controllers/citas.controllers.js";

const routerCitas = router;
routerCitas.get("/citas", getCitas);
routerCitas.post("/citas/", postCitas);
routerCitas.put("/citas/:id", putCitas);
routerCitas.delete("/citas/:id", deleteCitas);

export default routerCitas;