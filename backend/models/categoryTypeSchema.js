import mongoose from "mongoose";

const categoryTypeSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
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

categoryTypeSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const CategoryType = mongoose.model("CategoryType", categoryTypeSchema);

// Soft delete method
CategoryType.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};
