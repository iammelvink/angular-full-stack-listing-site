import * as admin from 'firebase-admin';
import {
  db
} from '../database';
import Boom from '@hapi/boom';

export const deleteListingRoute = {
  method: 'DELETE',
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    // Get id from URL param
    const {
      id
    } = req.params;
    // Get auth token from frontend
    const token = req.headers.authtoken;
    // Get matching user from auth token
    // Check if that matches with 
    //user whose data is being requested
    const user = await admin.auth().verifyIdToken(token);
    // Set user id to matching user id
    const user_id = user.user_id;

    // Throw error if the user_id DOES NOT match with user_id whose data is being requested
    if (user.user_id !== user_id) throw Boom.unauthorized('Only Signed in users can delete listings');

    // Delete existing listing where id and user_id matches
    await db.query(
      'DELETE FROM listings WHERE id=? AND user_id=?;',
      [id, user_id]
    );

    // Send message to client
    return {
      message: 'Success!'
    };
  }
}