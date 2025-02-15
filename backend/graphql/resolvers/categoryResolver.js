import { Category } from '../../models/categorySchema.js'; // Import the Mongoose model

const categoryResolver = {
  Query: {
    getCategory: async ({ id }) => {
      return await Category.findById(id);
    },
    getAgencies: async () => {
      return await Category.find();
    },
  },
  Mutation: {
    createCategory: async (_, { name, category_type, is_parent, parent_id, _tracking, search_counter }) => {
      const category = new Category({ name, category_type, is_parent, parent_id, _tracking, search_counter });
      return await category.save();
    },
    updateCategory: async (_, { id, name, category_type, is_parent, parent_id, _tracking, search_counter }) => {
      return await Category.findByIdAndUpdate(
        id,
        { name, category_type, is_parent, parent_id, _tracking, search_counter, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteCategory: async (_, { id }) => {
      await Category.findByIdAndDelete(id);
      return 'Category deleted successfully';
    },
  },
};

export default categoryResolver;
