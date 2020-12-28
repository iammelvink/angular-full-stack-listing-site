import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

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
        // Injecting the ListingsService into the new-listing-page.component
        // via the constructor
        private listingsService: ListingsService,
    ) { }

    ngOnInit(): void {
        // Get id param from URL
        const id: string | any = this.route.snapshot.paramMap.get('id');
        // Load existing listing
        // by subscribing to the listingsService
        // using a callback to assign our listing
        this.listingsService.getListingById(id)
            .subscribe(listing => {
                this.listing = listing;
            });
    }

    // Call when submit button is clicked
    // Edit existing listing
    // by subscribing to the listingsService
    // onSubmit({ name, description, price }) NOT working for now
    onSubmit({ name, description, price }: { name: string, description: string, price: number }): void {
        this.listingsService.editListing(this.listing.id, name, description, price).subscribe(() => {
            // Then go to /my-listings
            this.router.navigateByUrl('/my-listings');
        });
    }

}
