import { Injectable } from '@angular/core';
import { fakeListings, fakeMyListings } from './fake-data';
import { Listing } from './types';

@Injectable({
    providedIn: 'root'
})
export class ListingsService {

    constructor() { }

    // Method to return listings to listings components
    getListings(): Listing[] {
        return fakeMyListings;
    }
}
