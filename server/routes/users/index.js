import express from 'express';
import { getUser, updateProfile, updateSkills } from '../../handlers/userHandler.js'

const userRouter = express.Router();
userRouter.get("/:id", getUser);
userRouter.put("/:id/profile", updateProfile);
userRouter.put("/:id/skills", updateSkills);

export default userRouter;