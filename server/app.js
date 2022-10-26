const express = require("express");
const argon2 = require("argon2");

require("dotenv").config();
const app = express();

app.get("/signUp");
app.get("/login");