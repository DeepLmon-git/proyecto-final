import express, { json } from "express";
//fix para __dirname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controllers.js";
const app=express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("servidor corriendo ", app.get("port"));

//config
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/",(req,res)=> res.sendFile(__dirname+"/index.html"));
app.get("/login",(req,res)=> res.sendFile(__dirname+"/pags/login.html"));
app.get("/register",(req,res)=> res.sendFile(__dirname+"/pags/register.html"));
app.get("/admin",(req,res)=> res.sendFile(__dirname+"/pags/admin/admin.html"));
app.post("/api/register",authentication.register);
app.post("/api/login",authentication.login);