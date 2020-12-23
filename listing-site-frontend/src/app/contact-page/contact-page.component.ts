import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

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
    ) { }

    ngOnInit(): void {
        // Get id param from URL
        const id = this.route.snapshot.paramMap.get('id');
        // Assign matching listing to member variable
        this.listing = fakeListings.find(listing => listing.id === id);
        // Set default message
        this.message = `Hi, I'm interested in your ${this.listing.name.toLocaleLowerCase()}!`;
    }

    // Call when click send button
    sendMessage(): void {
        // Show alert
        alert('Your message has been sent!');
        // Then go to /listings
        this.router.navigateByUrl('/listings');
    }

}
