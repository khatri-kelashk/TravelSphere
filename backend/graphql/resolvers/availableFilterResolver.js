import { AvailableFilter } from '../../models/availableFilterSchema.js'; // Import the Mongoose model

const availableFilterResolver = { 
  Query: {
    getAvailableFilter: async ({ id }) => {
      return await AvailableFilter.findById(id);
    },
    getAvailableFilters: async () => {
      return await AvailableFilter.find();
    },  
  },
  Mutation: {
    createAvailableFilter: async (_, { name, value }) => {
      const availableFilter = new AvailableFilter({ name, value });
      return await availableFilter.save();
    },
    updateAvailableFilter: async (_, { id, name, value }) => {
      return await AvailableFilter.findByIdAndUpdate(
        id,
        { name, value, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteAvailableFilter: async (_, { id }) => {
      await AvailableFilter.findByIdAndDelete(id);
      return 'Available Filter deleted successfully';
    },  
  },
};

export default availableFilterResolver;
