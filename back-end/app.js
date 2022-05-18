const express = require("express");
const path = require("path")
const app = express();
require("./db/conn");
const RegisterInput = require("./src/models/inputs");
const { response } = require("express");


const port = process.env.PORT || 3000;



app.post("/register", async(req, res) => {
    try {
    

     const input = req.body.input;
     
     console.log(req.body.input)
    
         const registerUser = new Register({
             input:req.body.input,
           
         })

         const registered = await registerUser.save();
         res.status(201).render("login");
    
    } catch (error) {
        res.status(400).send(error)
    }
});
