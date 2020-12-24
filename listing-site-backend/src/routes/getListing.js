import Boom from '@hapi/boom';
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
    const listing = fakeListings.find(listing => listing.id === id);
    //   Throw error if listing is not found
    if (!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);

    //   If found, return the listing
    return listing;
  }
}