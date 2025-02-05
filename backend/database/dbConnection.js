import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Travel_Sphere_Db"
    })
    .then(() => console.log("Connected to MongoDB") )
    .catch(err => console.log("Error in DB connection->",err))
}