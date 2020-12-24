import Hapi from '@hapi/hapi';
import routes from './routes';

// Server configs
const start = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost'
  });

  // Use forEach to add all routes to our Hapi server
  routes.forEach(route => server.route(route));

  await server.start();
  console.log(`Server is listening on ${server.info.uri}`);
}

// Process errors
process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

// Start the Hapi server
start();