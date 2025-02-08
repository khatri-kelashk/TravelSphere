import UserResolver from "./userResolver.js";
import AvailableFilterResolver from "./availableFilterResolver.js";
import AgencyResolver from './agencyResolver.js';

const resolvers = {
  Query: {
    ...UserResolver.Query,
    ...AvailableFilterResolver.Query,
    ...AgencyResolver.Query,
  },
  
  Mutation: {
    ...UserResolver.Mutation,
    ...AvailableFilterResolver.Mutation,
    ...AgencyResolver.Mutation,
  },
};

export default resolvers;
