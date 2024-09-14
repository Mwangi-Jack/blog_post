import { Router } from "express";
import { login, siginin } from "../controllers/authController.js";


const authRouter = Router();

authRouter.post('/login', login)
authRouter.post('/signin', siginin)

export default authRouter;
