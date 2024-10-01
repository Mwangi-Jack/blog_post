import { Router } from "express";
import { googleSignin, login, siginin } from "../controllers/authController.js";


const authRouter = Router();

authRouter.post('/login', login)
authRouter.post('/signin', siginin)
authRouter.post('/google-login', googleSignin);

export default authRouter;
