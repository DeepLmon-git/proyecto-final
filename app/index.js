import express, { json } from "express";
import cookieParser from "cookie-parser";
//fix para __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as authentication } from "./controllers/authentication.controllers.js";
import { methods as authorization } from "./middlewares/authorization.js";
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser());

//app.set("port", process.env.PORT);
//app.listen(app.get("port"));



app.get("/", authorization.soloPublico, (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/login", authorization.soloPublico, (req, res) => res.sendFile(__dirname + "/pags/login.html"));
app.get("/register", authorization.soloPublico, (req, res) => res.sendFile(__dirname + "/pags/register.html"));
app.get("/admin", authorization.soloAdmin, (req, res) => res.sendFile(__dirname + "/pags/admin/admin.html"));
app.get("/home", authorization.soloAdmin, (req, res) => res.sendFile(__dirname + "/pags/admin/Home.html"));
app.post("/api/register", authentication.register);
app.post("/api/login", authentication.login);

//config
