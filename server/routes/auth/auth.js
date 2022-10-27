import express from 'express';
import hashPassword from '../../services/hashPassword'
import verifyPassword from '../../services/verifyPassword'

import {createUser, getUserByUserNameAndPassword} from '../../handlers/userHandler'


const authRouter = express.Router();
app.post("/signUp", hashPassword, createUser);
app.post("/login", verifyPassword, getUserByUserNameAndPassword);

export default authRouter;