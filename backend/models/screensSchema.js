import mongoose from "mongoose";

const screensSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    url: {
        type: "string",
        required: [true, "Please input url"],
        minLength: [3, "Min 3 chars "],
    },
    module_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please input module_id"],
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

export const Screens = mongoose.model("Screens", screensSchema);
