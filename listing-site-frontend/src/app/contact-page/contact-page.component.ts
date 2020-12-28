import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
    // Member variables that contain the email, message and listing
    email: string = '';
    message: string = '';
    // listing: Listing; not working for now
    listing: Listing | any;

    constructor(
        // Provider is to get id param from URL
        private route: ActivatedRoute,
        // Provider is to go to a route
        private router: Router,

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
                // Set default message
                this.message = `Hi, I'm interested in your ${this.listing.name.toLocaleLowerCase()}!`;
            });
    }

    // Call when click send button
    sendMessage(): void {
        // Show alert
        alert('Your message has been sent!');
        // Then go to /listings
        this.router.navigateByUrl('/listings');
    }

}
