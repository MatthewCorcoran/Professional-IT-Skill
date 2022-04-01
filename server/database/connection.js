const mongoose = require("mongoose");
require('dotenv').config();

const connect = async () => {

    try{
        const connected = await mongoose.
        connect('mongodb+srv://admin:admin1234@cluster0.svb2j.mongodb.net/loginDB?retryWrites=true&w=majority',{

            useNewUrlParser:true,
            useUnifiedTopology:true,

        } )
   console.log("MongoDB Connected");
}catch(err){
console.log(err)
process.exit(1)
}
}

module.exports ={connect};
