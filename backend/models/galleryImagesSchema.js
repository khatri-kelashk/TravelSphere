import mongoose from "mongoose";

const galleryImagesSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Please input name"],
        minLength: [3, "Min 3 chars "],
        maxLength: [30, "Max 30 chars"],
    },
    image_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    resd_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    euro_trip_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    is_ref: {
      type: "bool",
      default: false,  
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

galleryImagesSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

export const GalleryImages = mongoose.model("GalleryImages", galleryImagesSchema);

// Soft delete method
GalleryImages.prototype.softDelete = function() {
  this.isDeleted = true;
  return this.save();
};