import mongoose from "mongoose";

const moduleScreensSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    module_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please input module_id"],
    },
    screen_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please input screen_id"],
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

export const ModuleScreens = mongoose.model("ModuleScreens", moduleScreensSchema);
