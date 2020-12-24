import {
  db
} from '../database';

export const updateListingRoute = {
  method: 'POST',
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    // Get id from URL param
    const {
      id
    } = req.params;
    // Get listing from the request payload
    const {
      name,
      description,
      price
    } = req.payload;
    // Hard coding user_id
    // We'll use authentication later
    const user_id = '12345';

    // Updating existing listing
    await db.query(`
      UPDATE listings
      SET name=?, description=?, price=?
      WHERE id=? AND user_id=?;`,
      [name, description, price, id, user_id]);
    // Get updated listing from db and send back to client
    const {
      results
    } = await db.query(
      // user_id=? Prevents sql injection attacks
      'SELECT * FROM listings WHERE id=? AND user_id=?;',
      [id, user_id]
    );

    // Return results to client
    return results[0];
  }
}