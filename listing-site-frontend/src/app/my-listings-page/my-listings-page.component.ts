import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
    selector: 'app-my-listings-page',
    templateUrl: './my-listings-page.component.html',
    styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
    // Array of Listings
    // initialize to empty array
    listings: Listing[] = [];

    constructor(
        // Injecting the ListingsService into the my-listings-page.component
        // via the constructor
        private listingsService: ListingsService,
    ) { }

    ngOnInit(): void {
        // load user listings from listings.service
        this.listingsService.getListingsForUser()
            .subscribe(listings => this.listings = listings);
    }

    // Delete user listing using the listings.service
    onDeleteClicked(listingId: string): void {
        this.listingsService.deleteListing(listingId)
            .subscribe(() => {
                // filter deleted listing out
                // to prevent page reload
                this.listings = this.listings.filter(
                    listing => listing.id !== listingId
                );
            })
    }

}
