const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/todoapp")
.then(()=> console.log("MongoDB Connected"))

app.get("/",(req,res)=>{
    res.send("backend running")
})

app.listen(5000,()=>{
    console.log("server started on port 5000")
})
