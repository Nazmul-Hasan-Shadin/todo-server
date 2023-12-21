const mongoose= require('mongoose')
require('dotenv').config()

const getConnection=()=>{
    let connectionString;
    
    if (process.env.ENVIORNMENT==="development") {
        connectionString= process.env.URI
        connectionString=connectionString.replace('<username>',process.env.DB_USER)
        connectionString=connectionString.replace('<password>',process.env.DB_PASS)
    }
    console.log(connectionString);
    return connectionString
}

const getConnectToDb=async()=>{
     console.log('database connecting');
    const uri=  getConnection()
    await mongoose.connect(uri);
    console.log('connected');
}


module.exports=getConnectToDb