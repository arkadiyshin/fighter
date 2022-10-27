import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';

dotenv.config();

import authRouter from './routes/auth/auth.js';
import userRouter from './routes/users/index.js';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`Server running on http://localhost:${PORT}`);
});