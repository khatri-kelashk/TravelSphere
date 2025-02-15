import { EuroTrip } from '../../models/euroTripSchema.js'; // Import the Mongoose model

const euroTripResolver = {
  Query: {
    getEuroTrip: async ({ id }) => {
      return await EuroTrip.findById(id);
    },
    getAgencies: async () => {
      return await EuroTrip.find();
    },
  },
  Mutation: {
    createEuroTrip: async (_, { name, country_id, transportation_type_id, agency_id, image_id, price_image_id, desc_short, desc_long, no_of_days, _tracking, search_counter }) => {
      const record = new EuroTrip({ name, country_id,transportation_type_id, agency_id, image_id, price_image_id, desc_short, desc_long, no_of_days, _tracking, search_counter });
      return await record.save();
    },
    updateEuroTrip: async (_, { id, name, country_id, transportation_type_id, agency_id, image_id, price_image_id, desc_short, desc_long, no_of_days, _tracking, search_counter }) => {
      return await EuroTrip.findByIdAndUpdate(
        id,
        { name, country_id,transportation_type_id, agency_id, image_id, price_image_id, desc_short, desc_long, no_of_days, _tracking, search_counter, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteEuroTrip: async (_, { id }) => {
      await EuroTrip.findByIdAndDelete(id);
      return 'EuroTrip deleted successfully';
    },
  },
};

export default euroTripResolver;
