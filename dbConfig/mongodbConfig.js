const mongoose = require('mongoose');

const mongodbConfig = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ehsx8n2.mongodb.net/${process.env.DB_NAME}?appName=Cluster0`)
  .then(() => console.log('Connected!'));

}
module.exports = mongodbConfig

// mongodb+srv://esnode2601:BdynUVUPJMAJMYHy@cluster0.ehsx8n2.mongodb.net/test?appName=Cluster0



