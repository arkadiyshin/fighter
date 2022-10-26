import express from 'express';
import * as dotenv from 'dotenv'
import authRouter from './routes/auth/auth.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/auth', authRouter);

app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`Server running on http://localhost:${PORT}`);
});