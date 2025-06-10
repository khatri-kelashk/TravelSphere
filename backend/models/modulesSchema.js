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

modulesSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const Modules = mongoose.model("Modules", modulesSchema);

// Soft delete method
Modules.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};