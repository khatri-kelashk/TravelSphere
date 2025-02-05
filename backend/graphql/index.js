import { makeExecutableSchema } from "@graphql-tools/schema";
import userSchema from "./schemas/userSchema.js";
import userResolver from "./resolvers/userResolver.js";

import availableFilterSchema from "./schemas/availableFilterSchema.js";
import availableFilterResolver from "./resolvers/availableFilterResolver.js";

// Merge schemas
const typeDefs = [userSchema, availableFilterSchema];
//Merge Resolvers
const resolvers = [userResolver, availableFilterResolver];

// Create the executable schema
const combinedSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default combinedSchema;
