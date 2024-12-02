const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URL).then(con=>{
        console.log(`MongoDB is connected to the host: ${con.connection.host}`)
    })
}

module.exports = connectDatabase;