import {
  db
} from '../database';

export const getUserListingsRoute = {
  method: 'GET',
  path: '/api/users/{user_id}/listings',
  handler: async (req, h) => {
    // Get user_id from URL param
    const user_id = req.params.user_id;

    //Get personal listings for that user
    const {
      results
    } = await db.query(
      // user_id=? Prevents sql injection attacks
      'SELECT * FROM listings WHERE user_id=?;',
      [user_id]
    );

    // Return results to client
    return results;
  }
}