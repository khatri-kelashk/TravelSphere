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

availableFilterSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const AvailableFilter = mongoose.model("AvailableFilter", availableFilterSchema);

// Soft delete method
AvailableFilter.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};