import express from 'express';
import { getAvatars } from '../../handlers/avatarHandler.js'

const avatarRouter = express.Router();
avatarRouter.get("/", getAvatars);

export default avatarRouter;