// import { User, AvailableFilter, Agency } from './models'; // Adjust the import path as needed
import { AvailableFilter } from '../../models/availableFilterSchema.js'; // Import the Mongoose model
import { User } from '../../models/userSchema.js'; // Import the Mongoose model
import { Agency } from "../../models/agencySchema.js"

const resolvers = {
  Query: {
    getUser: async ({ id }) => {
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    },
    getAvailableFilter: async ({ id }) => {
      return await AvailableFilter.findById(id);
    },
    getAvailableFilters: async () => {
      return await AvailableFilter.find();
    },
    getAgencies: async () => await Agency.find(),
  },
  
  Mutation: {
    createUser: async (_, { user_name, email, phone_no, password, role }) => {
      const user = new User({ user_name, email, phone_no, password, role });
      return await user.save();
    },
    updateUser: async (_, { id, user_name, email, phone_no, password, role }) => {
      return await User.findByIdAndUpdate(
        id,
        { user_name, email, phone_no, password, role },
        { new: true } // Return the updated document
      );
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return 'User deleted successfully';
    },
    createAvailableFilter: async (_, { name, value }) => {
        const availableFilter = new AvailableFilter({ name, value });
        return await availableFilter.save();
    },
    updateAvailableFilter: async (_, { id, name, value }) => {
        return await AvailableFilter.findByIdAndUpdate(
          id,
          { name, value },
          { new: true } // Return the updated document
        );
    },
    deleteAvailableFilter: async (_, { id }) => {
        await AvailableFilter.findByIdAndDelete(id);
        return 'Available Filter deleted successfully';
    },
    
    createAgency: async (_, { name, location, phone_no, working_hours, desc_short, desc_long, logo_id }) => {
      const agency = new Agency({ name, location, phone_no, working_hours, desc_short, desc_long, logo_id });
      await agency.save();
      return agency;
    },
  },
};

export default resolvers;
