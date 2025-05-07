import { ResidenceFilters } from '../../models/residenceFilterSchema.js'; // Import the Mongoose model

const residenceFilterResolver = { 
  Query: {
    getResidenceFilter: async ({ id }) => {
      return await ResidenceFilters.findById(id);
    },
    getResidenceFilters: async () => {
      return await ResidenceFilters.find();
    },  
  },
  Mutation: {
    createResidenceFilter: async (_, { ablFilterId, resd_id }) => {
      const availableFilter = new ResidenceFilters({ ablFilterId, resd_id });
      return await availableFilter.save();
    },
    updateResidenceFilter: async (_, { id, ablFilterId, resd_id }) => {
      return await ResidenceFilters.findByIdAndUpdate(
        id,
        { ablFilterId, resd_id, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteResidenceFilter: async (_, { id }) => {
      await ResidenceFilters.findByIdAndDelete(id);
      return 'Residence Filter deleted successfully';
    },  
  },
};

export default residenceFilterResolver;
