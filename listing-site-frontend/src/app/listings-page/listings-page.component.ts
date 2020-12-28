import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
    selector: 'app-listings-page',
    templateUrl: './listings-page.component.html',
    styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
    // Array of Listings
    // initialize to empty array
    listings: Listing[] = []

    constructor(
        // Injecting the ListingsService into the listings-page.component
        // via the constructor
        private listingsService: ListingsService,
    ) { }

    ngOnInit(): void {
        // Set listings member variable to listings from listingsService
        this.listings = this.listingsService.getListings();
    }

}
