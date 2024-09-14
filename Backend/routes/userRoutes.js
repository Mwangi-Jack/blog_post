import express from 'express'
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.put('/', updateUser);
userRouter.delete('/:userId', deleteUser);


export default  userRouter;
