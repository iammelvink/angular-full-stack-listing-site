import {
  fakeListings
} from './fake-data';

// Get listing per id
export const getListingRoute = {
  method: 'GET',
  // '{id}' = URL param for Hapi instead of ':id'
  path: '/api/listings/{id}',
  handler: (req, h) => {
    const id = req.params.id;
    return fakeListings.find(listing => listing.id === id);
  }
}