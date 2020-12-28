import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
    selector: 'app-listing-data-form',
    templateUrl: './listing-data-form.component.html',
    styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {

    // @Input() buttonText; not working for now
    @Input() buttonText = '';
    @Input() currentName = '';
    @Input() currentDescription = '';
    @Input() currentPrice = '';

    // Member variables that contain the name, description and price of listing
    id: string = ''; //needed for onButtonClicked method
    name: string = '';
    description: string = '';
    price: string = '';

    @Output() onSubmit = new EventEmitter<Listing>();

    constructor(
        // Provider is to go to a route
        private router: Router,
    ) { }

    ngOnInit(): void {
        // Assigning values from @Inputs
        this.name = this.currentName;
        this.description = this.currentDescription;
        this.price = this.currentPrice;
    }

    // Call when submit button is clicked
    onButtonClicked(): void {
        this.onSubmit.emit({
            // id: null, not working for now
            id: this.id,
            name: this.name,
            description: this.description,
            price: Number(this.price),
            views: 0
        });
    }

}
