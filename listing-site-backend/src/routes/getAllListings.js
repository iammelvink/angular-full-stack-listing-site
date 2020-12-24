import {
  fakeListings
} from './fake-data';

// Get all listings
export const getAllListingsRoute = {
  method: 'GET',
  path: '/api/listings',
  handler: (req, h) => {
    return fakeListings;
  }
}