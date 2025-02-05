import { buildSchema } from 'graphql';

// Define the GraphQL schema
const availableFilterSchema = buildSchema(`
  type AvailableFilter {
    id: ID!
    name: String!
    value: String
  }

  type Query {
    getAvailableFilter(id: ID!): AvailableFilter
    getAvailableFilters: [AvailableFilter]
  }

  type Mutation {
    createAvailableFilter(name: String!, value: String): AvailableFilter
    updateAvailableFilter(id: ID!, name: String, value: String): AvailableFilter
    deleteAvailableFilter(id: ID!): String
  }
`);

export default availableFilterSchema;
