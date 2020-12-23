import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
    selector: 'app-listing-detail-page',
    templateUrl: './listing-detail-page.component.html',
    styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
    // Member variable that contains the listing
    // listing: Listing; not working for now
    listing: Listing | any;

    constructor(
        // Provider is to get id param from URL
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        // Get id param from URL
        const id = this.route.snapshot.paramMap.get('id');
        // Assign matching listing to member variable
        this.listing = fakeListings.find(listing => listing.id === id);
    }

}
