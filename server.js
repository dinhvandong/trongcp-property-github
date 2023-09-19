const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require("path");
dotenv.config();
const connectToDatabase = require("./config/dbConfig");

const app = express();

app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const fileRoute = require("./routes/fileRoute");
//const doctorRoute = require("./routes/doctorsRoute");
// const path = require("path");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/file", fileRoute);
//app.use("/api/doctor", doctorRoute);

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
  }

  const port = process.env.PORT || 5000;
  app.get("/", (req, res) => res.send("Hello World!"));


  connectToDatabase()
  .then(() => {
    // Start the server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error
  });
  // app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));