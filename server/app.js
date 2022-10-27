import { express } from "express";
import { getUserByUserNameAndPassword, createUser } from "./userHandler";
import { hashPassword, verifyPassword } from "./routes/auth/auth";

require("dotenv").config();
const app = express();

app.post("/signUp", hashPassword, createUser);
app.post("/login", getUserByUserNameAndPassword);
//verifyPassword
