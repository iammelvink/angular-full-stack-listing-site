import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-listing-page',
    templateUrl: './new-listing-page.component.html',
    styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {

    constructor(
        // Provider is to go to a route
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    // Call when submit button is clicked
    onSubmit(): void {
        // Show alert
        alert('Creating a new listing...');
        // Then go to /my-listings
        this.router.navigateByUrl('/my-listings');
    }

}
