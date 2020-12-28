import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
    selector: 'app-new-listing-page',
    templateUrl: './new-listing-page.component.html',
    styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {

    constructor(
        // Provider is to go to a route
        private router: Router,
        // Injecting the ListingsService into the new-listing-page.component
        // via the constructor
        private listingsService: ListingsService,
    ) { }

    ngOnInit(): void {
    }

    // Call when submit button is clicked
    // Create a new listing
    // by subscribing to the listingsService
    // onSubmit({ name, description, price }) NOT working for now
    onSubmit({ name, description, price }: { name: string, description: string, price: number }): void {
        this.listingsService.createListing(name, description, price).subscribe(() => {
            // Then go to /my-listings
            this.router.navigateByUrl('/my-listings');
        });
    }

}
