import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    image_url: {
        type: "string",
        required: [false, "Please input image URL"],
    },
    width: {
        type: "number",
        default: 0,
    },
    height: {
        type: "number",
        default: 0,
    },
    mimetype: {
        type: "string",
        required: [false, "Please input Mime type"],
    },
    ext: {
        type: "string",
        required: [false, "Please input image URL"],
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

imagesSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const Images = mongoose.model("Images", imagesSchema);

// Soft delete method
Images.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};