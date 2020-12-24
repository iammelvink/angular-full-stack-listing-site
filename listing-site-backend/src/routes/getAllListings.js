import {
  db
} from '../database';

// Get all listings
export const getAllListingsRoute = {
  method: 'GET',
  path: '/api/listings',
  handler: async (req, h) => {
    // Get all listings from database
    const {
      results
    } = await db.query(
      'SELECT * FROM listings;'
    );
    return results;
  }
}