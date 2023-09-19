// const mongoose = require("mongoose");
// const dbName = 'propertydb';

// const mongoUrl =  'mongodb://localhost:27017/propertydb';

// mongoose.connect(mongoUrl);

// const connection = mongoose.connection;
// connection.on("connected", () => {
//   console.log("MongoDB connection is successful");
// });


// connection.on("error", (error) => {
//   console.log("Error in MongoDB connection", error);
// });


// const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/propertydb';

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
// module.exports = mongoose;


const mongoose = require('mongoose');

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://127.0.0.1:27017/propertydb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
      resolve();
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
      reject(error);
    });
  });
};

module.exports = connectToDatabase;
