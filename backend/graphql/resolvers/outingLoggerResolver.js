import { OutingLoggers } from '../../models/outingLoggersSchema.js'; // Import the Mongoose model
import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLID, GraphQLNonNull }  from 'graphql';

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
    heartbeat : async(_, {})=>{
        try {
            const result = await OutingLoggers.findOne({
              where: { id, user_id, logout_at: null }
            });
      
            if (!result) {
              return {
                success: false,
                message: 'No Logged in User records found!',
                error: 'No active session found'
              };
            }
      
            result.session_expired_at = new Date();
            await result.save();
      
            return {
              success: true,
              message: 'Heartbeat successful!',
              error: null
            };
          } catch (error) {
            console.error('Error occurred while fetching Logger records ->', error);
            return {
              success: false,
              message: 'Error occurred while fetching Logged in User records',
              error: error.message
            };
          }
    }
  },
};

export default OutingLoggerResolver;
