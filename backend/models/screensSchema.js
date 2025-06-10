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
    isDeleted: { 
        type: Boolean, 
        default: false 
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

screensSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const Screens = mongoose.model("Screens", screensSchema);

// Soft delete method
Screens.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};