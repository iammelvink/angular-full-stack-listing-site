import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
    selector: 'app-edit-listing-page',
    templateUrl: './edit-listing-page.component.html',
    styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
    // Member variable that contains the listing
    // listing: Listing; not working for now
    listing: Listing | any;

    constructor(
        // Provider is to get id param from URL
        private route: ActivatedRoute,
        // Provider is to go to a route
        private router: Router,
    ) { }

    ngOnInit(): void {
        // Get id param from URL
        const id = this.route.snapshot.paramMap.get('id');
        // Assign matching listing to member variable
        this.listing = fakeMyListings.find(listing => listing.id === id);
    }

    // Call when onSubmit button is clicked
    onSubmit(): void {
        // Show alert
        alert('Saving changes to the listing...');
        // Then go to /my-listings
        this.router.navigateByUrl('/my-listings');
    }

}
