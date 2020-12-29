import * as admin from 'firebase-admin';
import {
  db
} from '../database';
import Boom from '@hapi/boom';

export const getUserListingsRoute = {
  method: 'GET',
  path: '/api/users/{user_id}/listings',
  handler: async (req, h) => {
    // Get auth token from frontend
    const token = req.headers.authtoken;
    // Get matching user from auth token
    // Check if that matches with 
    //user whose data is being requested
    const user = await admin.auth().verifyIdToken(token);
    // Get user_id from URL param
    const user_id = req.params.user_id;

    // Throw error if the user_id DOES NOT match with user_id whose data is being requested
    if (user.user_id !== user_id) throw Boom.unauthorized('Users can only access their own listings');

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