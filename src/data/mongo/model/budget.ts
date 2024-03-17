import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
    products: {
        type: Array,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
});

export const BudgetModel = mongoose.model("Budget", budgetSchema);