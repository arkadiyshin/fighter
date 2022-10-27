import express from 'express';
import {startGame, finishGame} from '../../handlers/gameHandler.js'

const gameRouter = express.Router();
gameRouter.get("/start", startGame);
gameRouter.post("/finish", finishGame);

export default gameRouter;