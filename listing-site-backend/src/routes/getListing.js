import Boom from '@hapi/boom';
import {
  db
} from '../database';

// Get listing per id
export const getListingRoute = {
  method: 'GET',
  // '{id}' = URL param for Hapi instead of ':id'
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    const id = req.params.id;
    // Get listing per id from database
    const {
      results
    } = await db.query(
      // id=? Prevents sql injection attacks
      'SELECT * FROM listings WHERE id=?;',
      [id]
    );

    const listing = results[0];
    //   Throw error if listing is not found
    if (!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);

    //   If found, return the listing
    return listing;
  }
}