import { gql } from 'apollo-server-express';

const typeDefs = gql`

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

  type AvailableFilter {
    id: ID!
    name: String!
    value: String
  }
    
  type Category {
    id: ID!
    _tracking: Boolean
    search_counter: Int
    name: String!
    category_type: ID
    is_parent: Boolean
    parent_id: ID
  }
    
  type CategoryType {
    id: ID!
    name: String!
  }

  type EuroTrip {
    id: ID!
    _tracking: Boolean
    search_counter: Int
    name: String!
    country_id: ID
    transportation_type_id: ID
    agency_id: ID
    image_id: ID
    no_of_days: Int
    desc_short: String
    desc_long: String
  } 

  type Module {
    id: ID!
    name: String!
  }
  
  type HeartbeatResponse {
    success: Boolean!
    message: String!
    error: String
  }

  type User {
    id: ID!
    user_name: String!
    email: String!
    phone_no: String
    password: String!
    role: String
  }

  type Query {
    getAgency(id: ID!): Agency
    getAgencies: [Agency]
    getAvailableFilter(id: ID!): AvailableFilter
    getAvailableFilters: [AvailableFilter]
    getCategory(id: ID!): Category
    getCategories: [Category]
    getCategoryType(id: ID!): Category
    getCategoryTypes: [Category]
    getEuroTrip(id: ID!): EuroTrip
    getEuroTrips: [EuroTrip]
    getModule(id: ID!): Module
    getModules: [Module]
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createAgency(name: String!, location: String, phone_no: String, working_hours: String, desc_short: String, desc_long: String, logo_id: ID, _tracking: Boolean, search_counter: Int): Agency
    updateAgency(id: ID!, name: String!, location: String, phone_no: String, working_hours: String, desc_short: String, desc_long: String, logo_id: ID, _tracking: Boolean, search_counter: Int): Agency
    deleteAgency(id: ID!): String

    createAvailableFilter(name: String!, value: String): AvailableFilter
    updateAvailableFilter(id: ID!, name: String, value: String): AvailableFilter
    deleteAvailableFilter(id: ID!): String

    createCategory(name: String!, category_type: ID, is_parent: Boolean, parent_id: ID, _tracking: Boolean, search_counter: Int): Category
    updateCategory(id: ID!, name: String!, category_type: ID, is_parent: Boolean, parent_id: ID, _tracking: Boolean, search_counter: Int): Category
    deleteCategory(id: ID!): String

    createCategoryType(name: String!): CategoryType
    updateCategoryType(id: ID!, name: String!): CategoryType
    deleteCategoryType(id: ID!): String
    
    createEuroTrip(name: String!,country_id: ID, transportation_type_id: ID, agency_id: ID, image_id: ID, price_image_id: ID, no_of_days:Int , desc_short: String, desc_long: String, _tracking: Boolean, search_counter: Int): EuroTrip
    updateEuroTrip(id: ID!, name: String!,country_id: ID, transportation_type_id: ID, agency_id: ID, image_id: ID, price_image_id: ID, no_of_days:Int , desc_short: String, desc_long: String, _tracking: Boolean, search_counter: Int): EuroTrip
    deleteEuroTrip(id: ID!): String

    createModule(name: String!): Module
    updateModule(id: ID!, name: String!): Module
    deleteModule(id: ID!): String

    heartbeat(id: ID!, user_id: ID!): HeartbeatResponse!


    createUser(user_name: String!, email: String!, password: String!, phone_no: String, role: String): User
    updateUser(id: ID!, user_name: String, email: String, password: String, phone_no: String, role: String): User
    deleteUser(id: ID!): String
  }
`;

export default typeDefs;
