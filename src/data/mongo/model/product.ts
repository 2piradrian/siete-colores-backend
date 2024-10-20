import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    keywords: {
        type: [String],
        required: true,
    },
    stock: {
        type: Number || null,
        required: false,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});

export const ProductModel = mongoose.model("Product", productSchema);