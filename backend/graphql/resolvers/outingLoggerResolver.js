import { OutingLoggers } from '../../models/outingLoggersSchema.js'; // Import the Mongoose model

const OutingLoggerResolver = { 
  Query: {
    getOutingLogger: async ({ id }) => {
      return await OutingLoggers.findById(id);
    },
    getOutingLoggers: async () => {
      return await OutingLoggers.find();
    },  
  },
  Mutation: {
    // createOutingLogger: async (_, { name }) => {
    //   const record = new OutingLoggers({ name });
    //   return await record.save();
    // },
    updateOutingLogger: async (_, { id, user_id }) => {
      let now = new Date();

      return await OutingLoggers.findByIdAndUpdate(
        { id, user_id },
        { logoutAt: now, updatedAt: now },
        { new: true } // Return the updated document
      );
    },
  },
};

export default OutingLoggerResolver;
