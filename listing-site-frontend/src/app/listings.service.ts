import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './types';

const httpOptions = {
    headers: new HttpHeaders({
        // Tells server that the request body of our POST request is a json object
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class ListingsService {

    constructor(
        // Providing the HttpClient
        private http: HttpClient,
    ) { }

    // Method to return listings to listings components
    // Observable is a generic type
    getListings(): Observable<Listing[]> {
        // Making request to server
        return this.http.get<Listing[]>('/api/listings');
    }

    // Method to return listingById to listing-detail-page component
    // Observable is a generic type
    getListingById(id: string): Observable<Listing> {
        // Making request to server
        return this.http.get<Listing>(`/api/listings/${id}`);
    }

    // Method to add a view to a listing
    // Observable is a generic type
    addViewToListing(id: string): Observable<Listing> {
        // Making request to server
        return this.http.post<Listing>(`/api/listings/${id}/add-view`,
            {}, // Empty object
            httpOptions);
    }

    // Method to return listingsForUser to my-listings-page component
    // Observable is a generic type
    getListingsForUser(): Observable<Listing[]> {
        // Making request to server
        return this.http.get<Listing[]>('/api/users/12345/listings');
    }

    // Method to delete a listingById
    // Observable is a generic type
    deleteListing(id: string): Observable<any> {
        // Making request to server
        return this.http.delete<any>(`/api/listings/${id}`);
    }
}
