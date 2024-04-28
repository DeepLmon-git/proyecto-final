import express from "express";

const app=express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("servidor corriendo ", app.get("port"));