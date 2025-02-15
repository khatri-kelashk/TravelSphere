import mongoose from "mongoose";

const euroTripSchema = new mongoose.Schema({
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
    no_of_days: {
        type: "number",
        default: 0,
    },
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    transportation_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    agency_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    image_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    price_image_id: {
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export const EuroTrip = mongoose.model("EuroTrips", euroTripSchema);
