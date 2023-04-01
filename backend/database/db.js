
const mongoose = require("mongoose");
const uri = "mongodb+srv://akorez:1@cluster0.hfdzspz.mongodb.net/?retryWrites=true&w=majority";

const connection = () => {
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("MongoDB conecction is success"))
    .catch((err)=> console.log("Connection error! Error is: " + err.message))

}

module.exports = connection;