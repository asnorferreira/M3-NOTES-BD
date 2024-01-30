import express from "express";
import controller from "../controller/index.js";
import verifyLog from "../middleware/authentication.js";

const routes = express();

routes.post("/login", controller.postLogin);

routes.use(verifyLog);

routes.post("/usuario", controller.postUser);
routes.post("/carro", controller.postCar);

routes.get("/carro", controller.getAllCars);
routes.get("/carro/:id", controller.getOneCar);
routes.get("/perfil", controller.getProfile);

routes.put("/carro/:id", controller.putCar);

routes.delete("/carro/:id", controller.deleteCar);

export default routes;
