const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const MusivibesModel = require('./models/Musivibes')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Musivibes");

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    MusivibesModel.findOne({email : email})
    .then(enduser => {
        if(enduser) {
            if (enduser.password === password) {
                res.json("Success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("No record found...")
        }
    })
})

app.post('/register',(req,res) => {
        MusivibesModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})