const mongoose = require('mongoose');
const mongoURL= "mongodb://localhost:27017";

 const connectToMongo= ()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("mongo connected successfully");
    });
}

module.exports = connectToMongo;