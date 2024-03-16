import indexController from "./../controllers/indexController.js";
import { Router } from "express"; //express es la libreria

const indexRouter = Router(); // inicializa el enrutador y lo guarda en una variable

indexRouter.get("/", indexController.index); //

export default indexRouter;
