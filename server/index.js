import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config();

import authRouter from './routes/auth/auth.js';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use(cors());

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server running on http://localhost:${PORT}`);
});