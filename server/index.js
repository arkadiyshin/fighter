import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';

dotenv.config();

import header from './services/headerContent.js';
import authRouter from './routes/auth/auth.js';
import userRouter from './routes/users/index.js';
import gameRouter from './routes/games/index.js';
import avatarRouter from './routes/avatars/index.js';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(header);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/games", gameRouter);
app.use("/avatars", avatarRouter);

app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`Server running on http://localhost:${PORT}`);
});