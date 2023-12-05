import { Router } from "express";
import UserController from "../controller/UserController.js";

const router = new Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.post("/remove/:id ", UserController.removeUser);
router.get("/user/:id ", UserController.getOneUser);
router.get("/users", UserController.getUsers);

export default router;
