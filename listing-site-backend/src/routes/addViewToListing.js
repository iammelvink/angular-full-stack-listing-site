import {
  db
} from '../database';
export const addViewToListingRoute = {
  method: 'POST',
  path: '/api/listings/{id}/add-view',
  handler: async (req, h) => {
    // Get id of listing
    const id = req.params.id;
    // Increment views on listing by 1
    // id=? Prevents sql injection attacks
    await db.query(
      'UPDATE listings SET views=views+1 WHERE ID=?;',
      [id]
    );
    // Get updated value
    const {
      results
    } = await db.query(
      // id=? Prevents sql injection attacks
      'SELECT * FROM listings WHERE id=?;',
      [id]
    );
    // Return updated listing to the client
    const updatedListing = results[0];
    return updatedListing;
  }
}