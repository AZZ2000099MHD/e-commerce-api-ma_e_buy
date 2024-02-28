import mongoose from "mongoose";
import User from "./User.js";
const Schema = mongoose.Schema;


const CategorySchema = new Schema(
    {
        name:{
            type:String,
            required : true,
        },

        user:{
            type:String,
            ref:"user",
            required: true,
        },

        image: {
            type:String,

            required:true,
        },

        products:[
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"Product",
                },
            ],
        },

    {timestamps:true}

);

const Category = mongoose.model("Category", CategorySchema);

export default Category;