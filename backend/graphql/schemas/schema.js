import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    user_name: String!
    email: String!
    phone_no: String
    password: String!
    role: String
  }

  type AvailableFilter {
    id: ID!
    name: String!
    value: String
  }

  type Agency {
    id: ID!
    _tracking: Boolean
    search_counter: Int
    name: String!
    location: String
    phone_no: String
    working_hours: String
    desc_short: String
    desc_long: String
    logo_id: ID
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
    getAvailableFilter(id: ID!): AvailableFilter
    getAvailableFilters: [AvailableFilter]
    getAgencies: [Agency]
  }

  type Mutation {
    createUser(user_name: String!, email: String!, password: String!, phone_no: String, role: String): User
    updateUser(id: ID!, user_name: String, email: String, password: String, phone_no: String, role: String): User
    deleteUser(id: ID!): String
    createAvailableFilter(name: String!, value: String): AvailableFilter
    updateAvailableFilter(id: ID!, name: String, value: String): AvailableFilter
    deleteAvailableFilter(id: ID!): String
    createAgency(name: String!, location: String, phone_no: String, working_hours: String, desc_short: String, desc_long: String, logo_id: ID): Agency
    updateAgency(id: ID!, name: String!, location: String, phone_no: String, working_hours: String, desc_short: String, desc_long: String, logo_id: ID): Agency
    deleteAgency(id: ID!): String
  }
`;

export default typeDefs;
