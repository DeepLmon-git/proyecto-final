import express, { json } from "express";
import cookieParser from "cookie-parser";
//fix para __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as authentication } from "./app/controllers/authentication.controllers.js";
import { methods as authorization } from "./app/middlewares/authorization.js";
const app = express();
const port = process.env.PORT || 4000;
console.log(__dirname);

//config
app.use(express.static(__dirname + "/app/public"));
app.use(express.json());
app.use(cookieParser());


app.get("/", authorization.soloPublico, (req, res) => res.sendFile(__dirname + "/app/index.html"));
app.get("/login", authorization.soloPublico, (req, res) => {
    res.sendFile(__dirname + "/app/pags/login.html")
    
});
app.get("/register", authorization.soloPublico, (req, res) => res.sendFile(__dirname + "/app/pags/register.html"));
app.get("/admin", authorization.soloAdmin, (req, res) => res.sendFile(__dirname + "/app/pags/admin/admin.html"));
app.get("/home", authorization.soloAdmin, (req, res) => res.sendFile(__dirname + "/app/pags/admin/Home.html"));
app.get("/series1", authorization.soloAdmin, (req, res) => res.sendFile(__dirname + "/app/pags/admin/series/serie1.html"));
app.post("/api/register", authentication.register);
app.post("/api/login", authentication.login);

app.listen(port, ()=>{
    console.log("el puerto es " + port) 
    
});
