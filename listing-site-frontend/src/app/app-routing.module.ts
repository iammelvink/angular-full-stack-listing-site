import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Imports for custom pages
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';


const routes: Routes = [
    // Redirect from home to /listings
    // pathMatch: 'full' = prevents confusion with other routes
    { path: '', redirectTo: '/listings', pathMatch: 'full' },
    // Listings
    { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
    // Per Listing
    // :id = URL parameter
    { path: 'listings/:id', component: ListingDetailPageComponent },
    // Contact
    // :id = URL parameter
    { path: 'contact/:id', component: ContactPageComponent },
    // Edit Listing
    // :id = URL parameter
    { path: 'edit-listing/:id', component: EditListingPageComponent },
    // My Listing
    { path: 'my-listings', component: MyListingsPageComponent },
    // New Listing
    { path: 'new-listing', component: NewListingPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
