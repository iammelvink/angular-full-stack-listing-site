import {
  getAllListingsRoute
} from './getAllListings';
import {
  getListingRoute
} from './getListing';
import {
  addViewToListingRoute
} from './addViewToListing';
import {
  getUserListingsRoute
} from './getUserListings';
import {
  createNewListingRoute
} from './createNewListing';
import {
  updateListingRoute
} from './updateListing';
import {
  deleteListingRoute
} from './deleteListing';
import {
  staticFilesRoute,
  filesRoutes
} from './files';
// Export Array of all routes
export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updateListingRoute,
  deleteListingRoute,
  // Below routes are for production
  staticFilesRoute,
  ...filesRoutes // ... = spread operator to join arrays at same level
];