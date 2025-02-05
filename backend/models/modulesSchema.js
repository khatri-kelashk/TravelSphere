import mongoose from "mongoose";

const modulesSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    description: {
        type: "string",
        required: [false, "Please input Description"]
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

export const Modules = mongoose.model("Modules", modulesSchema);
