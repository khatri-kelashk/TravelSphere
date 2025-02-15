import { Modules } from '../../models/modulesSchema.js'; // Import the Mongoose model

const ModuleResolver = { 
  Query: {
    getModule: async ({ id }) => {
      return await Modules.findById(id);
    },
    getModules: async () => {
      return await Modules.find();
    },  
  },
  Mutation: {
    createModule: async (_, { name }) => {
      const record = new Modules({ name });
      return await record.save();
    },
    updateModule: async (_, { id, name }) => {
      return await Modules.findByIdAndUpdate(
        id,
        { name, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteModule: async (_, { id }) => {
      await Modules.findByIdAndDelete(id);
      return 'Category Type deleted successfully';
    },  
  },
};

export default ModuleResolver;
