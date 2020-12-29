import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './types';

const httpOptions = {
    headers: new HttpHeaders({
        // Tells server that the request body of our POST request is a json object
        'Content-Type': 'application/json',
    })
};

const httpOptionsWithAuthToken = (token: object | any) => ({
    headers: new HttpHeaders({
        // Tells server that the request body of our POST request is a json object and a token
        'Content-Type': 'application/json',
        'AuthToken': token
    })
});

@Injectable({
    providedIn: 'root'
})
export class ListingsService {

    constructor(
        // Providing the HttpClient
        private http: HttpClient,

        // Providing AngularFireAuth to the listings.service
        private firebase: AngularFireAuth
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
        // Custom nested Observables
        return new Observable<Listing[]>(observer => {
            // Get current user
            this.firebase.user.subscribe(user => {
                // Get user auth token
                user && user.getIdToken().then(token => {
                    // Check if both user and token exist
                    if (user && token) {
                        // Making request to server
                        this.http.get<Listing[]>(`/api/users/${user.uid}/listings`, httpOptionsWithAuthToken(token))
                            .subscribe(listings => {
                                observer.next(listings)
                            });
                    }
                    // If both user and auth token DO NOT exist
                    // return an empty array
                    else {
                        observer.next([]);
                    }
                })
            })
        })

    }

    // Method to delete a listingById
    // Observable is a generic type
    deleteListing(id: string): Observable<any> {
        // Custom nested Observables
        return new Observable<any>(observer => {
            // Get current user
            this.firebase.user.subscribe(user => {
                // Get user auth token
                user && user.getIdToken().then(token => {
                    // Check if both user and token exist
                    if (user && token) {
                        // Making request to server
                        this.http.delete<any>(`/api/listings/${id}`, httpOptionsWithAuthToken(token))
                            .subscribe(() => observer.next());
                    }
                })
            })
        })
    }

    // Method to create a new listing
    // Observable is a generic type
    createListing(name: string, description: string, price: number): Observable<Listing> {
        // Custom nested Observables
        return new Observable<Listing>(observer => {
            // Get current user
            this.firebase.user.subscribe(user => {
                // Get user auth token
                user && user.getIdToken().then(token => {
                    // Check if both user and token exist
                    if (user && token) {
                        // Making request to server
                        this.http.post<Listing>('/api/listings',
                            { name, description, price },
                            httpOptionsWithAuthToken(token))
                            .subscribe(() => observer.next());
                    }
                })
            })
        })
    }

    // Method to edit an existing listing
    // Observable is a generic type
    editListing(id: string, name: string, description: string, price: number): Observable<Listing> {
        // Custom nested Observables
        return new Observable<Listing>(observer => {
            // Get current user
            this.firebase.user.subscribe(user => {
                // Get user auth token
                user && user.getIdToken().then(token => {
                    // Check if both user and token exist
                    if (user && token) {
                        // Making request to server
                        this.http.post<Listing>(`/api/listings/${id}`,
                            { name, description, price },
                            httpOptionsWithAuthToken(token))
                            .subscribe(() => observer.next());
                    }
                })
            })
        })
    }
}
