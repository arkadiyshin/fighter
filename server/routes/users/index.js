import express from 'express';


const userRouter = express.Router();
authRouter.get("/users/:id", getUser);

export default authRouter;