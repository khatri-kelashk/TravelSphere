import mongoose from "mongoose";

const outingLoggersSchema = new mongoose.Schema({
    user_name: {
        type: "string",
        required: [true, "Please input user_name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please input user_id"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    login_at: {
        type: Date,
        default: Date.now,
    },
    logout_at: {
        type: Date,
        default: Date.now,
    },
    session_expired_at: {
        type: Date,
        default: null,
    },
});

export const OutingLoggers = mongoose.model("OutingLoggers", outingLoggersSchema);
