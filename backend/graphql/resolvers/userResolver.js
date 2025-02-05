import { User } from '../../models/userSchema.js'; // Import the Mongoose model

const userResolver = {
  Query: {
    getUser: async ({ id }) => {
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async ({ user_name, email, phone_no, password, role }) => {
      const user = new User({ user_name, email, phone_no, password, role });
      return await user.save();
    },
    updateUser: async ({ id, user_name, email, phone_no, password, role }) => {
      return await User.findByIdAndUpdate(
        id,
        { user_name, email, phone_no, password, role },
        { new: true } // Return the updated document
      );
    },
    deleteUser: async ({ id }) => {
      await User.findByIdAndDelete(id);
      return 'User deleted successfully';
    },
  },
};

export default userResolver;
