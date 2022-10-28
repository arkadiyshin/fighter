import express from 'express';
import { getTiles, createEmptyMap } from '../../handlers/tileHandler.js'

const tileRouter = express.Router();
tileRouter.get("/", getTiles);
tileRouter.post("/createEmptyMap/:width/:height", createEmptyMap);

export default tileRouter;