import { Agency } from '../../models/agencySchema.js'; // Import the Mongoose model

const agencyResolver = {
  Query: {
    getAgency: async ({ id }) => {
      return await Agency.findById(id);
    },
    getAgencies: async () => {
      return await Agency.find();
    },
  },
  Mutation: {
    createAgency: async (_, { name, location, phone_no, working_hours, desc_short, desc_long, logo_id, _tracking, search_counter }) => {
      const agency = new Agency({ name, location, phone_no, working_hours, desc_short, desc_long, logo_id, _tracking, search_counter });
      return await agency.save();
    },
    updateAgency: async (_, { id, name, location, phone_no, working_hours, desc_short, desc_long, logo_id, _tracking, search_counter  }) => {
      return await Agency.findByIdAndUpdate(
        id,
        { name, location, phone_no, working_hours, desc_short, desc_long, logo_id, _tracking, search_counter, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteAgency: async (_, { id }) => {
      await Agency.findByIdAndDelete(id);
      return 'Agency deleted successfully';
    },
  },
};

export default agencyResolver;
