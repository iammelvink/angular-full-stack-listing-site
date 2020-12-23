import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
    selector: 'app-my-listings-page',
    templateUrl: './my-listings-page.component.html',
    styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
    // Array of Listings
    // initialize to empty array
    listings: Listing[] = [];

    constructor() { }

    ngOnInit(): void {
        // Set Listings member variable to fakeMyListings
        this.listings = fakeMyListings;
    }

    onDeleteClicked(listingId: string): void {
        alert(`Deleting your listing with id ${listingId}`);
    }

}
