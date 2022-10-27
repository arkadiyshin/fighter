import express from 'express';
import {getUser} from '../../handlers/userHandler.js'

const userRouter = express.Router();
userRouter.get("/:id", getUser);

export default userRouter;