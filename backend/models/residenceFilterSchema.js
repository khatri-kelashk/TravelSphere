import mongoose from "mongoose";

const residenceFilterSchema = new mongoose.Schema({
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
    resd_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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

export const ResidenceFilters = mongoose.model("ResidenceFilters", residenceFilterSchema);
