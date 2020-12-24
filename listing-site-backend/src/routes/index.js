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

// Export Array of all routes
export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updateListingRoute
];