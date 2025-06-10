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
    ablFilterId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    resd_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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

residenceFilterSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const ResidenceFilters = mongoose.model("ResidenceFilters", residenceFilterSchema);

// Soft delete method
ResidenceFilters.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};
