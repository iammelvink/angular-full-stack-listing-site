import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
    selector: 'app-listings-page',
    templateUrl: './listings-page.component.html',
    styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
    // Array of Listings
    // initialize to empty array
    listings: Listing[] = []

    constructor() { }

    ngOnInit(): void {
        // Set Listings member variable to fakeListings
        this.listings = fakeListings;
    }

}
