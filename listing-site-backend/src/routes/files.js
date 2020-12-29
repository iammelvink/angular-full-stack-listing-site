// Array of paths to be made accessible by the frontend from the backend
const angularRoutePaths = [
  '/',
  '/listings',
  '/contact/{id}',
  '/edit-listing/{id}',
  '/listings/{id}',
  '/my-listings',
  '/new-listing'
];

// Mapping each path to its required file
export const filesRoutes = angularRoutePaths.map(path => ({
  method: 'GET',
  path,
  handler: (req, h) => {
    return h.file('dist/listing-site-frontend/index.html');
  }
}))

// Exporting static files to be served by the backend server
export const staticFilesRoute = {
  method: 'GET',
  path: '/{params*}',
  handler: {
    directory: {
      path: 'dist/listing-site-frontend'
    }
  }
}