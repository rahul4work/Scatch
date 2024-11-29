const mongoose = require('mongoose');
const config = require("config");

const dbgr = require("debug")("development:mongoose");

const mongoURI = process.env.MONGODB_URI || config.get("MONGODB_URI") || "mongodb://127.0.0.1:27017/scatch";

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("connected");;
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;