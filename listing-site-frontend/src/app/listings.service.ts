import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './types';

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
}
