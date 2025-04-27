import { Residences } from '../../models/residencesSchema'; // Import the Mongoose model

const residenceResolver = {
  Query: {
    getResidence: async ({ id }) => {
      return await Residences.findById(id);
    },
    getAgencies: async () => {
      return await Residences.find();
    },
  },
  Mutation: {
    createResidence: async (_, { name, country_id, _tracking, region_id, resd_type_id,agency_id,desc_short, desc_long, filters }) => {
      const record = new Residences({ name, country_id, _tracking, region_id, resd_type_id,agency_id,desc_short, desc_long });
      return await record.save();
    },
    updateResidence: async (_, { id, name, country_id, _tracking, region_id, resd_type_id,agency_id,desc_short, desc_long, filters }) => {
      return await Residences.findByIdAndUpdate(
        id,
        { name, country_id, _tracking, region_id, resd_type_id,agency_id,desc_short, desc_long, updatedAt: new Date() },
        { new: true } // Return the updated document
      );
    },
    deleteResidence: async (_, { id }) => {
      await Residences.findByIdAndDelete(id);
      return 'Residence deleted successfully';
    },
    updateSearchCounter : async (_, { id }) => {
        try {
            const result = await Residences.findByIdAndUpdate(
              id,
              { $inc: { search_counter: 1 } },
              { new: true }
            );
      
            if (!result) {
              return {
                success: false,
                message: 'Residence not found',
                error: 'Invalid ID'
              };
            }
      
            return {
              success: true,
              message: 'Search count updated successfully!',
              error: null
            };
          } catch (error) {
            console.error('Error updating search counter:', error);
            return {
              success: false,
              message: 'Failed to update search count',
              error: error instanceof Error ? error.message : 'Unknown error'
            };
          }
    },
  },
};

export default residenceResolver;
