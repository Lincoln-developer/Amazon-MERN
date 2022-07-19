import express from "express"
import data from "./data.js";
//import mongoose from "mongoose";
//import dotenv from "dotenv";
//import seedRoute from "./routes/seedRoutes.js"

//Loading environment variables
/*dotenv.config();
//connecting to database
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to db'))
.catch(err => console.log(err.message))*/

const app = express();
//app.use('/api/seed',seedRoute);
app.get('/api/products',(req,res)=>{
    res.send(data.products);
})

app.get('/api/products/slug/:slug',(req,res)=>{
    const product = data.products.find(x => x.slug === req.params.slug)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product Not Found'})
    }
})

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server started on http://localhost:${port}`))