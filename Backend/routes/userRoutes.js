import express from 'express'
import { getUserSavedPosts,  createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUserSavedPosts);
userRouter.post('/', createUser);
userRouter.put('/:userId', updateUser);
userRouter.delete('/:userId', deleteUser);


export default  userRouter;
