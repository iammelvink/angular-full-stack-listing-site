import {
  db
} from '../database';

export const deleteListingRoute = {
  method: 'DELETE',
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    // Get id from URL param
    const {
      id
    } = req.params;

    // Delete existing listing
    await db.query(
      'DELETE FROM listings WHERE id=?;',
      [id]
    );

    // Send message to client
    return {
      message: 'Success!'
    };
  }
}