import Product from "../models/productModel.js";

const createProduct = async(req,res) => {
    try{
        const {
        name,
        slug,
        image,
        price,
        category,
        rating,
        description,
        numReviews,
        brand,
        countInStock,
       } = req.body
       const newCreatedProduct = await new Product
    }catch(err){

    }
}