import mongoose from "mongoose";

const residencesSchema = new mongoose.Schema({
    _tracking: {
      type: "bool",
      default: false,  
    },
    search_counter: {
        type: "number",
        default: 0,
    },
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    region_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    resd_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    agency_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    desc_short: {
        type: "string",
        required: [false, "Please input short Description"]
    },
    desc_long: {
        type: "string",
        required: [false, "Please input long Description"]
    },
    resd_image_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    price_image_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
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

residencesSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const Residences = mongoose.model("Residences", residencesSchema);

// Soft delete method
Residences.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};