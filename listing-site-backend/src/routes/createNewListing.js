import {
  v4 as uuid
} from 'uuid';
import * as admin from 'firebase-admin';
import {
  db
} from '../database';
import Boom from '@hapi/boom';

export const createNewListingRoute = {
  method: 'POST',
  path: '/api/listings',
  handler: async (req, h) => {
    // Get auth token from frontend
    const token = req.headers.authtoken;
    // Get matching user from auth token
    // Check if that matches with 
    //user whose data is being requested
    const user = await admin.auth().verifyIdToken(token);
    // Set user id to matching user id
    const user_id = user.user_id;

    // Throw error if the user_id DOES NOT match with user_id whose data is being requested
    if (user.user_id !== user_id) throw Boom.unauthorized('Only Signed in users can create listings');
    // Generate unique uuid
    const id = uuid();
    // Get payload from POST request
    const {
      name = '', description = '', price = 0
    } = req.payload;

    const views = 0;

    // Inserting new listing
    await db.query(`
      INSERT INTO listings (id, name, description, price, user_id, views)
      VALUES(?,?,?,?,?,?);`,
      [id, name, description, price, user_id, views]
    );

    // Return listing to client without querying the database
    return {
      id,
      name,
      description,
      price,
      user_id: user_id,
      views
    };
  }
}