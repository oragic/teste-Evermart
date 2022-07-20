const mongoose = require('mongoose');
const config = require('../../config/database');

let database

const connect =  () =>{
  if(database){
    return;
  }
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    retryWrites: true,
    poolSize: 500
  }
  const url = config.mongoUrl;

   mongoose.connect(url,options);


  database = mongoose.connection;

  database.once("open", async () =>{
    console.info("Connected to database");
  });

  database.on("error", (error) =>{
    console.info("Error connecting to database");
  });

}

const disconnect = () =>{
  if(!database){
    return;
  }
  mongoose.disconnect();
}

module.exports = connect;