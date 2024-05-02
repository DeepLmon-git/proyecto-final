import bcryptjs from "bcryptjs";


const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "$2a$05$8IFuhc6JU8.EIkIWN3Cmb./.VQdCECcYdZ87CbH91s36JlRT1rzGS",
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
    const usuarioAResvisar = usuarios.find(usuario => usuario.user === user);
    if (usuarioAResvisar) {
        return res.status(400).send({ status: "Error", message: "Este usuario ya existe" })
    }
    const salt = await bcryptjs.genSalt(5);
  const hashPassword = await bcryptjs.hash(password,salt);
  const nuevoUsuario ={
    user, email, password: hashPassword, tel
  }
  usuarios.push(nuevoUsuario);
  console.log(usuarios);
  return res.status(201).send({status:"ok",message:`Usuario ${nuevoUsuario.user} agregado`, redirect:"/"})



}
async function login(req, res) {

}
export const methods = {
    login,
    register
}
