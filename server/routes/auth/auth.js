import express from "express";
import hashPassword from "../../services/hashPassword.js";
import verifyPassword from "../../services/verifyPassword.js";

import {
  createUser,
  getUserByUserNameAndPassword,
  checkIfUserNameExists,
} from "../../handlers/userHandler.js";

const authRouter = express.Router();
authRouter.post("/signup", checkIfUserNameExists, hashPassword, createUser);
authRouter.post("/login", getUserByUserNameAndPassword, verifyPassword);

export default authRouter;
