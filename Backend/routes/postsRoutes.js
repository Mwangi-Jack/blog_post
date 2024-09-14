import { Router } from "express";
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "../controllers/postsController.js";

const postsRouter = Router()

postsRouter.get('/', getAllPosts)
postsRouter.get('/:postId', getPost);
postsRouter.post('/', createPost);
postsRouter.delete('/:postId', deletePost);
postsRouter.put('/:postId', updatePost);


export default postsRouter;
