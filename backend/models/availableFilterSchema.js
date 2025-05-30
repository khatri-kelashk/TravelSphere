import mongoose from "mongoose";

const availableFilterSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    value: {
        type: "string",
        required: [false, "Please input value"],
        default: "0"
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

export const AvailableFilter = mongoose.model("AvailableFilter", availableFilterSchema);
