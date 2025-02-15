import { CategoryType } from '../../models/categoryTypeSchema.js'; // Import the Mongoose model

const categoryTypeResolver = { 
  Query: {
    getCategoryType: async ({ id }) => {
      return await CategoryType.findById(id);
    },
    getCategoryTypes: async () => {
      return await CategoryType.find();
    },  
  },
  Mutation: {
    createCategoryType: async (_, { name }) => {
      const record = new CategoryType({ name });
      return await record.save();
    },
    updateCategoryType: async (_, { id, name }) => {
      return await CategoryType.findByIdAndUpdate(
        id,
        { name, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteCategoryType: async (_, { id }) => {
      await CategoryType.findByIdAndDelete(id);
      return 'Category Type deleted successfully';
    },  
  },
};

export default categoryTypeResolver;
