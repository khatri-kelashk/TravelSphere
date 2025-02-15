import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    _tracking: {
      type: "bool",
      default: false,  
    },
    search_counter: {
        type: "number",
        default: 0,
    },
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    category_type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "CategoryType"
    },
    is_parent: {
        type: "bool",
        default: false,  
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Category"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export const Category = mongoose.model("Category", categorySchema);
