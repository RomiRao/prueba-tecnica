import personasController from "../controllers/personasController.js";
import { Router } from "express";

const personasRouter = Router();

// Rutas
personasRouter.get("/", personasController.getLista);
// productRouter.post("/", );
// productRouter.put("/:id", );
// productRouter.delete("/:id", );
// productRouter.get("/:id", traerproductosolo);
// productRouter.get("/camisas", );

export default personasRouter;
