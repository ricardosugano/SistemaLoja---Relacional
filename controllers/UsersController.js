import express from "express";
const router = express.Router();
import User from "../models/User.js";

// rota de login
router.get("/login", (req, res) => {
    res.render("login");
});

// rota de cadastro
router.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

//rota de criação de usuário
router.post("/createUser", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.create({
        email: email,
        password : password,
    
}).then(() => {
    res.redirect("/login");

}).catch((error) => {
    console.log(error);
}); 
});
export default router;
