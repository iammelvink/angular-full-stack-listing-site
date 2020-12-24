import {
  v4 as uuid
} from 'uuid';
import {
  db
} from '../database';

export const createNewListingRoute = {
  method: 'POST',
  path: '/api/listings',
  handler: async (req, h) => {
    const id = uuid();
    // Get payload from POST request
    const {
      name = '', description = '', price = 0
    } = req.payload;
    // Hard coding user_id
    // We'll use authentication later
    const user_id = '12345';

    const views = 0;

    // Inserting new listing
    await db.query(`
      INSERT INTO listings (id, name, description, price, user_id, views)
      VALUES(?,?,?,?,?,?)`,
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