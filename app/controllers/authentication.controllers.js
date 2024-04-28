async function register(req, res){
    console.log(req.body)
    const user= req.body.user;
    const email= req.body.email;
    const password= req.body.password;
    const tel= req.body.tel;
    if (!user || !email || !password || !tel){
        res.status(400).send({status:"Error",message:"los campos esta incompletos"})
    }


}
async function login(req, res){
    
}
export const methods = {
    login,
    register
}
