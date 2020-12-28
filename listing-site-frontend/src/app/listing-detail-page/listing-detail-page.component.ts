import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
    selector: 'app-listing-detail-page',
    templateUrl: './listing-detail-page.component.html',
    styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

    isLoading: boolean = true;
    // Member variable that contains the listing
    // listing: Listing; not working for now
    listing: Listing | any;

    constructor(
        // Provider is to get id param from URL
        private route: ActivatedRoute,

        // Injecting the ListingsService into the listings-page.component
        // via the constructor
        private listingsService: ListingsService,
    ) { }

    ngOnInit(): void {
        // Get id param from URL
        // const id = this. NOT working for now
        const id: string | any = this.route.snapshot.paramMap.get('id');

        // Set listing member variable to listing from listingsService
        // by subscribing to the listingsService
        // using a callback to assign our listing
        this.listingsService.getListingById(id)
            .subscribe(listing => {
                this.listing = listing;
                this.isLoading = false;
            });
        // Add view to listing
        this.listingsService.addViewToListing(id)
            .subscribe(() => console.log('Views updated!'));
    }

}
