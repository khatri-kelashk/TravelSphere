import { buildSchema } from 'graphql';

// Define the GraphQL schema
const userSchema = buildSchema(`
  type User {
    id: ID!
    user_name: String
    email: String
    password: String
    phone_no: String
    role: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(user_name: String!, email: String!, password: String!, phone_no: String, role: String): User
    updateUser(id: ID!, user_name: String, email: String, password: String, phone_no: String, role: String): User
    deleteUser(id: ID!): String
  }
`);

export default userSchema;
