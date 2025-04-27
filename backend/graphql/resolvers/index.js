import AgencyResolver from './agencyResolver.js';
import AvailableFilterResolver from "./availableFilterResolver.js";
import CategoryResolver from './categoryResolver.js';
import CategoryTypeResolver from './categoryTypeResolver.js';
import EuroTripResolver from './euroTripResolver.js';
import ModuleResolver from './moduleResolver.js';
import OutingLoggerResolver from './outingLoggerResolver.js';
import residenceResolver from './residenceResolver.js';
import UserResolver from "./userResolver.js";

const resolvers = {
  Query: {
      ...AgencyResolver.Query,
      ...AvailableFilterResolver.Query,
      ...CategoryResolver.Query,
      ...CategoryTypeResolver.Query,
      ...EuroTripResolver.Query,
      ...ModuleResolver.Query,
      ...OutingLoggerResolver.Query,
      ...residenceResolver.Query,
      ...UserResolver.Query,
  },
  
  Mutation: {
      ...AgencyResolver.Mutation,
      ...AvailableFilterResolver.Mutation,
      ...CategoryResolver.Mutation,
      ...CategoryTypeResolver.Mutation,
      ...EuroTripResolver.Mutation,
      ...ModuleResolver.Mutation,
      ...OutingLoggerResolver.Mutation,
      ...residenceResolver.Mutation,
      ...UserResolver.Mutation,
  },
};

export default resolvers;
