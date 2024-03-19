const mongoose = require('mongoose')

const MusivibesSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const MusivibesModel = mongoose.model("user",MusivibesSchema)

module.exports = MusivibesModel