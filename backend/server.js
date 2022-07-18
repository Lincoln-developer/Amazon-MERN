import express from "express"
import data from "./data.js";

const app = express();

app.use('/api/products',(req,res)=>{
    res.send(data.products);
})

const port = process.env.PORT || 5000;

app.listen(port,(req,res) => console.log(`Server started on http://localhost:${port}`))