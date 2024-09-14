import { Router } from "express";
import postsRouter from "./postsRoutes.js";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";


const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/posts', postsRouter);
apiRouter.use('/users', userRouter);


export default apiRouter;
