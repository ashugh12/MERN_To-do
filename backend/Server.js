const express =require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require('./routes/ToDoRoutes')
const cors= require("cors")
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const PORT = process.env.port || 5000;
app.use(express.json());
app.use(routes);
// app.use(cors());


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(`Connected`)
    app.listen(PORT, ()=>console.log(`Listening on ${PORT}`))
}).catch((err)=>{console.log(err)})
 