import dotenv from 'dotenv';
dotenv.config(); // injects environment variables from .env into the server
import Hapi from '@hapi/hapi';
import routes from './routes';
import * as admin from 'firebase-admin';
import {
  db
} from './database';
import credentials from '../credentials.json';

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

let server;

// Server configs
const start = async () => {
  server = Hapi.server({
    port: 8000,
    host: 'localhost'
  });

  // Use forEach to add all routes to our Hapi server
  routes.forEach(route => server.route(route));

  // Connect to database
  db.connect();
  await server.start();
  console.log(`Server is listening on ${server.info.uri}`);
}

// Process errors
process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

// On server shutdown signal
process.on('SIGINT', async () => {
  console.log('Stopping server...');

  // Wait for 10 seconds before forcing server shutdown
  await server.stop({
    timeout: 10000
  });

  // Close connection to db
  db.end();
  console.log('Server stopped');
  process.exit(0);
})

// Start the Hapi server
start();