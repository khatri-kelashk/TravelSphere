import { OutingLoggers } from '../../models/outingLoggersSchema.js'; // Import the Mongoose model
import cron from'node-cron';
import { subMinutes } from'date-fns';

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
        { logout_at: now, updatedAt: now },
        { new: true } // Return the updated document
      );
    },
    heartbeat : async(_, {id, user_id})=>{
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

cron.schedule('* * * * *', async () => {
    try {
      // Find all sessions where session_expired_at < (now - 1 minute) and logout_at is null
      const results = await OutingLoggers.find({
        session_expired_at: { $lt: subMinutes(new Date(), 1) },
        logout_at: null,
      });
  
      // For each result, set logout_at = session_expired_at and save
      for (const result of results) {
        result.logout_at = result.session_expired_at;
        try {
          await result.save();
        } catch (er) {
          console.log('Error occurred while updating the logout DateTime from CRON method->', er);
        }
      }
    } catch (error) {
      console.error('Error occurred while fetching Logged in User records for updating the logout DateTime from CRON method->', error);
    }
  });

export default OutingLoggerResolver;
