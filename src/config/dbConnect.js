const mongoose = require('mongoose');
require('dotenv').config();


const dbConnect = async () =>{
    try{
        const uri = process.env.CONNECTION_STRING;
        if (!uri) {
            throw new Error('Missing CONNECTION_STRING environment variable');
        }
        const connect = await mongoose.connect(uri, {
            // optional mongoose settings can go here
        });
        console.log(`MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`);
    }
    catch(err){
        console.log(err);
        process.exit(1); // Exit process with failure

    }
   
}

module.exports = dbConnect;
