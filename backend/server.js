import cloudinary from "cloudinary";
import { ApolloServer } from 'apollo-server-express';
import app from "./app.js";
import typeDefs from './graphql/schemas/index.js';
import resolvers from './graphql/resolvers/index.js';
import importData from "./models/otherScripts.js";

const PORT = process.env.PORT || 5000;

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Set up the GraphQL endpoint
const server = new ApolloServer({ typeDefs, resolvers });
// Start the server
await server.start();
server.applyMiddleware({ app });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
  // importData();
});