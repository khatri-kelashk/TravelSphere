import mongoose from "mongoose";

const agencySchema = new mongoose.Schema({
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
    location: {
        type: "string",
        required: [false, "Please input Location"]
    },
    phone_no: {
        type: "string",
        required: [false, "Please input phone number"]
    },
    working_hours: {
        type: "string",
        required: [false, "Please input working hours"]
    },
    desc_short: {
        type: "string",
        required: [false, "Please input short Description"]
    },
    desc_long: {
        type: "string",
        required: [false, "Please input long Description"]
    },
    logo_id: {
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

agencySchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const Agency = mongoose.model("Agency", agencySchema);

// Soft delete method
Agency.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};
