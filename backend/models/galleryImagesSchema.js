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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export const GalleryImages = mongoose.model("GalleryImages", galleryImagesSchema);
