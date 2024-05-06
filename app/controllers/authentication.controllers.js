import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "$2a$05$bpuMcjNP40E9XUTCVqy/he5C1nyjnrhN90R3WOwwKusnkWWxHHJku",
    tel: "32334455565"
}]

async function register(req, res) {
    console.log(req.body)
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    const tel = req.body.tel;
    if (!user || !email || !password || !tel) {
        return res.status(400).send({ status: "Error", message: "los campos esta incompletos" })
    }
    const usuarioAResvisar = usuarios.find(usuario => usuario.user === user || usuario.email === email || usuario.tel === tel);
    if (usuarioAResvisar) {
        return res.status(400).send({ status: "Error", message: "Este usuario ya existe" })
    }
    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password, salt);
    const nuevoUsuario = {
        user, email, password: hashPassword, tel
    }
    usuarios.push(nuevoUsuario);
    console.log(usuarios);
    return res.status(201).send({ status: "ok", message: `Usuario ${nuevoUsuario.user} agregado`, redirect: "./login" })



}
async function login(req, res) {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(400).send({ status: "Error", message: "Los campos están incompletos" })
    }
    const usuarioAResvisar = usuarios.find(usuario => usuario.email === email);
    if (!usuarioAResvisar) {
        return res.status(400).send({ status: "Error", message: "Error durante login" })
    }
    const loginCorrecto = await bcryptjs.compare(password, usuarioAResvisar.password);
    if (!loginCorrecto) {
        return res.status(400).send({ status: "Error", message: "Error durante login" })
    }
    const token = jsonwebtoken.sign(
        { user: usuarioAResvisar.user },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION });

    const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        path: "/"
    }
    res.cookie("jwt", token, cookieOption);
    res.send({ status: "ok", message: "Usuario loggeado", redirect: "/home" });
}
export const methods = {
    login,
    register
}
