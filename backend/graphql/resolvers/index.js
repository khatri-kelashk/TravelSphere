import AgencyResolver from './agencyResolver.js';
import AvailableFilterResolver from "./availableFilterResolver.js";
import CategoryResolver from './categoryResolver.js';
import CategoryTypeResolver from './categoryTypeResolver.js';
import EuroTripResolver from './euroTripResolver.js';
import ModuleResolver from './moduleResolver.js';
import UserResolver from "./userResolver.js";

const resolvers = {
  Query: {
      ...AgencyResolver.Query,
      ...AvailableFilterResolver.Query,
      ...CategoryResolver.Query,
      ...CategoryTypeResolver.Query,
      ...EuroTripResolver.Query,
      ...ModuleResolver.Query,
      ...UserResolver.Query,
  },
  
  Mutation: {
      ...AgencyResolver.Mutation,
      ...AvailableFilterResolver.Mutation,
      ...CategoryResolver.Mutation,
      ...CategoryTypeResolver.Mutation,
      ...EuroTripResolver.Mutation,
      ...ModuleResolver.Mutation,
      ...UserResolver.Mutation,
  },
};

export default resolvers;
