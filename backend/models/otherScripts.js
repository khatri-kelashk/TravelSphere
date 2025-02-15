import fs from 'fs';
import mongoose from "mongoose";
import { Screens } from './screensSchema.js'; // Import the Mongoose model


async function importData() {
 
    try {
        
        // Read JSON file
        const data = JSON.parse(fs.readFileSync('C:\\Users\\Kelash Kumar\\Downloads\\screens.json', 'utf8'));
        console.log(`${JSON.stringify(data)} documents were inserted`);


        // Convert string IDs to ObjectId
        const convertedData = data.map(item => {
            return {
                ...item,
                module_id: item?.module_id ? new mongoose.Types.ObjectId(item?.module_id) : null,
                // agency_id: item?.agency_id ? new mongoose.Types.ObjectId(item?.agency_id) : null,
                // image_id: item?.image_id ? new mongoose.Types.ObjectId(item?.image_id) : null,
                // price_image_id: item?.price_image_id ? new mongoose.Types.ObjectId(item?.price_image_id) : null,
                // transportation_type_id: item?.transportation_type_id ? new mongoose.Types.ObjectId(item?.transportation_type_id) : null,
                // Add other fields as needed, converting them similarly
            };
        });

        // Insert converted documents into MongoDB using Mongoose
        await Screens.insertMany(convertedData);
        console.log(`${convertedData.length} documents were inserted`);
        

    } catch (err) {
        console.error("Error in loading data->",err);
    }
}

export default importData;
